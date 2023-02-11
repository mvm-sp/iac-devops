import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";


// Criar o recurso na AWS (S3 Bucket)
const bucket = new aws.s3.Bucket("pulumi-bucket-posmack");


// Criar o arquivo associado ao S3 Bucket
const bucketObject = new aws.s3.BucketObject("index.html", {
    contentType: "text/html",
    bucket: bucket,
    source: new pulumi.asset.FileAsset("./files/index.html")
});

// Export the name of the bucket
export const bucketName = bucket.id;

