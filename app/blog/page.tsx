'use client'
import React, { useState } from "react";
import BlogCard from "@/components/ui/BlogCard";

const blogPosts = [
  {
    imageUrl: "/images/gallery-1.jpeg",
    title: "Kurumsal Blog Yazısı 1",
    description: "Kurumsal blog için örnek bir yazı. Şirket gelişmeleri, duyurular ve sektörel bilgiler burada paylaşılır.",
    author: "Ostim Münazara",
    date: "20 Eylül 2025",
    slug: "example-blog",
  },
];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.description.toLowerCase().includes(search.toLowerCase());
    const matchesAuthor = authorFilter ? post.author === authorFilter : true;
    return matchesSearch && matchesAuthor;
  });

  const uniqueAuthors = Array.from(new Set(blogPosts.map((post) => post.author)));

  return (
    <main className="min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-3xl font-bold mb-8 text-primary">Blog</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Arama..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-neutral-300 rounded-lg px-3 py-2 w-full sm:w-1/2"
          />
          <select
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
            className="border border-neutral-300 rounded-lg px-3 py-2 w-full sm:w-1/2"
          >
            <option value="">Tüm Yazarlar</option>
            {uniqueAuthors.map((author) => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {filteredPosts.length === 0 ? (
            <div className="text-neutral-500 text-center">Blog yazısı bulunamadı.</div>
          ) : (
            filteredPosts.map((post, idx) => (
              <BlogCard key={idx} {...post} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Blog;