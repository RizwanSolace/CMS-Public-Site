import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Get in touch with the CMS team</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Have a question about your public website or need help publishing a page? Reach out and we will respond as soon as possible.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
              <a href="mailto:hello@cmspro.com" className="mt-3 block text-lg font-semibold text-slate-900 hover:text-blue-600">
                hello@cmspro.com
              </a>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Phone</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">+1 555 0123</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-700">Want to view the public pages first?</p>
            <Link href="/#pages" className="mt-3 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Browse published pages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
