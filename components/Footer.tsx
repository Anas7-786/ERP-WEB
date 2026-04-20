import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="container flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-slate-900">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">F</span>
            <div>
              <p className="text-lg font-semibold">Flowtics</p>
              <p className="text-sm text-slate-500">Smart ERP for seamless business flow.</p>
            </div>
          </div>
          <p className="text-sm leading-7">Modern business operations, joined in one polished ERP experience.</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-slate-600">
          <Link href="/features" className="transition hover:text-slate-900">
            Features
          </Link>
          <Link href="/pricing" className="transition hover:text-slate-900">
            Pricing
          </Link>
          <Link href="/about" className="transition hover:text-slate-900">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © 2026 Flowtics. All rights reserved.
      </div>
    </footer>
  );
}
