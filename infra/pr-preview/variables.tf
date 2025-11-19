variable "pr_number" {
  description = "GitHub PR number"
  type        = string
}

variable "preview_bucket_name" {
  description = "gsi bucket"
  type        = string
}

variable "basic_auth_user" {
  type        = string
  sensitive   = true
}

variable "basic_auth_pass" {
  type        = string
  sensitive   = true
}