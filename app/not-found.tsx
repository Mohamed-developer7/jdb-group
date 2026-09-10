import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bone px-6 text-center">
      <p className="font-display text-display-3 text-ink">This page doesn&rsquo;t exist.</p>
      <p className="mt-3 font-body text-base text-ink/60">But the journey does.</p>
      <Link
        href="/"
        className="mt-8 border-b border-brass pb-1 font-body text-sm text-ink transition-colors duration-300 hover:text-brass"
      >
        Back to JDB
      </Link>
    </main>
  );
}
