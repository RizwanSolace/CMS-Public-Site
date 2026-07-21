import api from "@/lib/axios";

export const cmsService = {
  async getPages(params: { slug: string }) {
    const { data } = await api.get(`/pages/${params.slug}`)
     

    return data;
  },
};