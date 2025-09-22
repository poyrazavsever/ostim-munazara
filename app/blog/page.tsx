'use client'
import React, { useState } from "react";
import BlogCard from "@/components/ui/BlogCard";

const blogPosts = [
  {
    imageUrl: "/images/blog.png",
    title:
      "Yazılım Dünyasında Hitabet Sanatının Gücü: İletişimin Yazılım Dünyasına Etkisi",
    description:
      "Yazılım projelerinde teknik becerilerin yanında hitabet ve etkili iletişimin rolü büyüktür. Bu yazı, ekip içi işleyişten müşteri ilişkilerine, sunumdan problem çözmeye kadar hitabet yeteneğinin nasıl fark yaratabileceğini ve yazılımcıların kendilerini nasıl daha iyi ifade edebileceklerini ele alıyor.",
    author: "Poyraz Avsever",
    date: "20 Eylül 2025",
    slug: "yazilim-munazara",
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