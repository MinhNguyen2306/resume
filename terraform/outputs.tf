output "environment" {
  value = var.environment
}

output "artifact_name" {
  value = local_file.environment_info.filename
}