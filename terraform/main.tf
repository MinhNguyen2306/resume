terraform {
  required_version = ">= 1.5.0"

  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.4"
    }
  }
}

resource "local_file" "environment_info" {
  filename = "${path.module}/build-${var.environment}.txt"

  content = <<EOT
Project: Resume Portfolio
Environment: ${var.environment}
Managed By: Terraform
Generated: ${timestamp()}
EOT
}