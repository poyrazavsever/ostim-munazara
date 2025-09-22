"use server";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";


interface BlogFrontmatter {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
  imageUrl?: string;
}

interface BlogData extends BlogFrontmatter {
  content: string;
}

interface PageProps {
  params: {
    slug: string;
  };
}

const getBlogContent = (slug: string): BlogData => {
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return { ...(data as BlogFrontmatter), content };
};

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(blogDir);
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}


const DetailBlog = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const blog = getBlogContent(slug);

  return (
    <main className="min-h-screen py-10">
      <div className="mx-auto max-w-2xl px-4">
        <h1 className="text-3xl font-bold mb-4 text-primary">{blog.title}</h1>
        <div className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
          <span>{blog.author}</span>
          <span>•</span>
          <span>{blog.date}</span>
        </div>
        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="rounded-xl mb-6 w-full object-cover"
            style={{ maxHeight: 320 }}
          />
        )}
        <article className="max-w-2xl mdCustom">
          <MDXRemote source={blog.content} />
        </article>
      </div>
    </main>
  );
};

export default DetailBlog;