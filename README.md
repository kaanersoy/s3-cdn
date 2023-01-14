# AWS S3 Bucket CDN Template

Simple cdn template for AWS S3 buckets. It allows upload and get image.

## 📦 Install

- Clone with `https://github.com/kaanersoy/s3-cdn.git`
- Run `yarn`
- Change `.env.example` -> `.env` and fill the informations.

## 🚏 Initial Routes

### `/upload`

There should be a `file` with multipart formdata request.

It will upload the file exact same name.

### `/image/:imageName`

It will get the image with original width and heigth.

But there is a `resize` option in this route

#### ✂️ Resize

`/image/:imageName?resize={width},{height}`

for example you can use it like this for don't corrupt the aspect ratio.

`/image/:imageName?resize=150,x`

`x` character is our escape character.
