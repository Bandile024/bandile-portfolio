import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-xl flex flex-col items-center gap-4 py-24 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="font-display text-4xl font-bold">Page not found</h1>
        <p className="max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
