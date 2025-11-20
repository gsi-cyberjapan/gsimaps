terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-northeast-1"
}

locals {
  basic_auth_header = "Basic ${base64encode("${var.basic_auth_user}:${var.basic_auth_pass}")}"
}

resource "aws_cloudfront_origin_access_control" "oac" {
  name                              = "pr-preview-oac"
  description                       = "PR preview for ${var.preview_bucket_name}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_function" "basic_auth" {
  name    = "pr-preview-basic-auth-pr-${var.pr_number}"
  runtime = "cloudfront-js-1.0"
  comment = "Basic auth for PR ${var.pr_number}"
  publish = true

  code = templatefile("${path.module}/basic-auth.js.tpl", {
    basic_auth_header = local.basic_auth_header
  })
}

resource "aws_cloudfront_distribution" "preview" {
  enabled             = true
  comment             = "Single distribution for all PR previews"
  default_root_object = "index.html"

  origins {
    domain_name              = "${var.preview_bucket_name}.s3.ap-northeast-1.amazonaws.com"
    origin_id                = "s3-preview"
    origin_access_control_id = aws_cloudfront_origin_access_control.oac.id
  }

  default_cache_behavior {
    target_origin_id       = "s3-preview"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]

    compress = true

    # 全パスに Basic 認証
    function_associations {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.basic_auth.arn
    }

    forwarded_values {
      query_string = true
      cookies {
        forward = "none"
      }
    }
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

output "preview_base_url" {
  description = "PR プレビューの CloudFront ベース URL"
  value       = "https://${aws_cloudfront_distribution.preview.domain_name}"
}

output "preview_distribution_arn" {
  description = "Distribution ARN"
  value       = aws_cloudfront_distribution.preview.arn
}