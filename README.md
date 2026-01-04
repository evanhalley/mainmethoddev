# MainMethod.dev

The landing page for MainMethod.dev LLC ("We build web and mobile products for niche groups and audiences.").

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build & Deployment

This project is configured for **Static Export** (`output: 'export'` in `next.config.ts`). This allows the site to be hosted on any object storage service (AWS S3, Google Cloud Storage, Azure Blob Storage) or static hosting provider.

### 1. Build the Static Site

Run the build command to generate the static assets:

```bash
npm run build
```

The build output will be located in the **`out/`** directory.

### 2. Deploy to Object Storage

Copy the contents of the `out/` directory to your object storage bucket.

**Example (AWS S3):**
```bash
aws s3 cp out/ s3://your-bucket-name --recursive
```

**Example (Google Cloud Storage):**
```bash
gcloud storage cp -r out/* gs://your-bucket-name
```

**Example (MinIO / S3 Compatible):**
```bash
mc cp -r out/ my-minio/my-bucket
```

Ensure your bucket is configured for static website hosting and has the appropriate public read permissions.
