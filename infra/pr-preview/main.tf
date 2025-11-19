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
  comment             = "Preview for PR ${var.pr_number}"
  default_root_object = "index.html"

  origin {
    domain_name = "${var.preview_bucket_name}.s3.ap-northeast-1.amazonaws.com"
    origin_id   = "preview"

    origin_path = "/pr-${var.pr_number}"

    s3_origin_config {
      origin_access_identity = ""
    }
  }

  default_cache_behavior {
    target_origin_id       = "preview"
    viewer_protocol_policy = "redirect-to-https"

    allowed_methods = ["GET", "HEAD"]
    cached_methods  = ["GET", "HEAD"]
    compress        = true

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.basic_auth.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}
