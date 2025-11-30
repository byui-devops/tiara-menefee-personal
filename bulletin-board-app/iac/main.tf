provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "example" {
  bucket = "my-demo-bucket-${random_id.rand.hex}"
}

resource "random_id" "rand" {
  byte_length = 4
}
