"use client";

import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import BlogCard from "./BlogCard";
import PaginationSection from "@/components/PaginationSection";
import { useState } from "react";

const BlogList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isPending } = useGetBlogs({ page });

  const onChangePage = (page: number) => {
    setPage(page);
  };

  if (isPending) {
    return <div className="text-center">Loading...</div>;
  }
  if (!data) {
    return <div className="text-center">No data</div>;
  }

  return (
    <>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {data?.data.map((blog, index) => {
          return <BlogCard key={index} blog={blog} />;
        })}
      </div>
      <PaginationSection
        onChangePage={onChangePage}
        page={page}
        take={data.meta.take}
        total={data.meta.total}
      />
    </>
  );
};

export default BlogList;
