"use client";
import { Badge } from "@/components/ui/badge";
import useGetBlog from "@/hooks/api/blog/useGetBlog";
import { format } from "date-fns";
import Image from "next/image";
import { FC } from "react";
import SkeletonBlog from "./components/SkeletonBlog";
import Markdown from "@/components/Markdown";

interface BlogDetailPageProps {
  blogId: number;
}

const BlogDetailPage: FC<BlogDetailPageProps> = ({ blogId }) => {
  const { data, isPending } = useGetBlog(blogId);
  if (isPending) {
    return <SkeletonBlog />;
  }

  if (!data) {
    return <h1 className="text-center">No data</h1>;
  }
  return (
    <main className="container mx-auto mt-4 max-w-5xl px-4">
      <section className="mb-4 space-y-2">
        <Badge>{data.category}</Badge>

        <h1 className="text-4xl font-semibold">{data.title} </h1>

        <p>
          {format(new Date(data.createdAt), "dd MMM yyyy")} - {data.user.name}
        </p>

        <div className="relative h-[400px]">
          <Image
            src={data.thumbnail}
            alt="Thumbnail"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <Markdown content={data.content} />
    </main>
  );
};

export default BlogDetailPage;
