import { cmsService } from "@/services/cms.service";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}


export default async function Page({ params }: Props) {
  const { slug } = await params;
console.log("Slug:", slug);

  const res = await cmsService.getPages({
    slug,
  });

  const page = res.data;
  if (!page) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl p-10">
      {page.featuredImage?.url ? (
  <img
    src={page.featuredImage.url}
    alt={page.featuredImage.originalName || page.title}
    className="mb-8 h-80 w-full rounded-xl object-cover"
  />
) : null}
      <h1 className="text-4xl font-bold">
        {page.title}
      </h1>

      <p className="mt-5 text-gray-600">
        {page.description}
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">
          {page.content.hero.title}
        </h2>

        <p>{page.content.hero.subtitle}</p>
      </section>
    </div>
  );
}