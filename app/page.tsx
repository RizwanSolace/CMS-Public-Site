import Link from "next/link";
import api from "@/lib/axios";

export default async function Home() {
  const { data: res } = await api.get("/pages");
  const pages = Array.isArray(res?.data) ? res.data : [];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
              Content management made simple
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Build a polished public website with flexible CMS pages.
            </h1>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              Publish rich landing pages, feature sections, and engaging content without touching code. Everything is managed from one clean dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#pages"
                className="rounded-full bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Explore pages
              </Link>
              <Link
                href="/conference"
                className="rounded-full border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                See example page
              </Link>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-white p-6 text-slate-800">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Why teams choose CMS Pro
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>• Create reusable page layouts with hero, intro, features, and CTA blocks</li>
                <li>• Publish content quickly with a simple admin experience</li>
                <li>• Keep your public website consistent, modern, and easy to update</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Fast publishing",
              text: "Create and update pages in minutes with ready-made content sections.",
            },
            {
              title: "Flexible layouts",
              text: "Use hero banners, featured content, and clear call-to-action areas to guide visitors.",
            },
            {
              title: "Professional presentation",
              text: "Deliver a polished experience that looks great on desktop and mobile.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pages" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Published pages</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Browse the public website</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pages.length > 0 ? (
            pages.map((page: any) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-medium text-blue-600">{page.status || "Published"}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{page.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {page.description || "Open this page to view the content created in the CMS."}
                </p>
              </Link>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-slate-600 md:col-span-2 xl:col-span-3">
              No pages have been published yet. Create your first CMS page from the admin area to see it appear here.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}