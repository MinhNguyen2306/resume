terraform {
  required_version = ">= 1.5.0"

  cloud {
    organization = "resume_minhnguyen"
  }

  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 3.0"
    }
  }
}

provider "vercel" {
  team = "team_WJaeExvSHkA4DN458z6DmmQM"
}

resource "vercel_project" "resume" {
  name           = var.project_name
  framework      = var.framework != "" ? var.framework : null
  team_id        = "team_WJaeExvSHkA4DN458z6DmmQM"
  root_directory = "frontend"

  git_repository = {
    type = "github"
    repo = var.github_repo
  }
}