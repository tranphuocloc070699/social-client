"use client";

import React, { useState } from "react";
import PostItem from "@/components/specific/post/post-item";

type Props = {
  className?: string;
};

const PostList = ({ className }: Props) => {
  const [loading, setLoading] = useState(false);

  async function fetchData(id: string) {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  }

  return (
    <div
      className={`mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 ${className}`}
    >
      {Array.from({ length: 10 }, (_, index) => index + 1).map((_, index) => (
        <PostItem key={index} loading={loading} />
      ))}
    </div>
  );
};

export default PostList;
