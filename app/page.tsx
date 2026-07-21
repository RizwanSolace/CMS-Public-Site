import Link from "next/link";
import api from "@/lib/axios";

export default async function Home() {
  const { data: res } = await api.get("/pages");

  return (
    <div className="p-10">
      <h1 className="mb-8 text-3xl font-bold">
        CMS Website
      </h1>

      <div className="space-y-3">
        {res.data.map((page: any) => (
          <Link
            key={page._id}
            href={`/${page.slug}`}
            className="block rounded border p-4 hover:bg-gray-100"
          >
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  );
}