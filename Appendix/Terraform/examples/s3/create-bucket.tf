terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "terraform-bucket-posmack" {
  bucket_prefix = "terraform-bucket-posmack"
}


resource "aws_s3_object" "index_html" {
  key    = "index.html"
  bucket = aws_s3_bucket.terraform-bucket-posmack.id
  source = "./files/index.html"
}

