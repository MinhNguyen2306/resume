variable "environment" {
  description = "Deployment environment (dev/prod)"
  type        = string
}

variable "project_name" {
  description = "Tên project trên Vercel"
  type        = string
}

variable "framework" {
  description = "Framework của site"
  type        = string
  default     = ""
}

variable "github_repo" {
  description = "Repo GitHub dạng owner/repo"
  type        = string
}