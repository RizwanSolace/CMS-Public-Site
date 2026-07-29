import { cmsService } from "@/services/cms.service";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const res = await cmsService.getPages({
    slug,
  });

  const page = res.data;
  if (!page) {
    notFound();
  }

  const hero = page.content?.hero ?? {};
  const intro = page.content?.intro ?? {};
  const features = page.content?.features ?? [];
  const cta = page.content?.cta ?? {};

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 text-slate-900">
      {page.featuredImage?.url ? (
        <img
          src={page.featuredImage.url}
          alt={page.featuredImage.originalName || page.title}
          className="mb-8 h-80 w-full rounded-2xl object-cover shadow-sm"
        />
      ) : null}

      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-white shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
          {page.title}
        </p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">{hero.title || page.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-blue-50">
          {hero.subtitle || page.description}
        </p>

        {hero.ctaText ? (
          <a
            href={hero.ctaLink || "#"}
            className="mt-6 inline-block rounded-full bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            {hero.ctaText}
          </a>
        ) : null}
      </section>

      {intro.title || intro.body ? (
        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">{intro.title || "Overview"}</h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">{intro.body}</p>
        </section>
      ) : null}

      {features.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {features.map((feature: { title?: string; description?: string }, index: number) => (
              <div key={`${feature.title || "feature"}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{feature.title || `Feature ${index + 1}`}</h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {cta.title || cta.description ? (
        <section className="mt-10 rounded-2xl bg-slate-900 px-8 py-10 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">{cta.title || "Ready to get started?"}</h2>
          <p className="mt-3 max-w-2xl text-slate-300">{cta.description}</p>
          {cta.buttonText ? (
            <a
              href={cta.buttonLink || "#"}
              className="mt-6 inline-block rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              {cta.buttonText}
            </a>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}