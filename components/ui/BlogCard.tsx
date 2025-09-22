import React from 'react'


interface BlogCardProps {
  imageUrl?: string;
  title: string;
  description: string;
  author?: string;
  date?: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl = "/images/gallery-1.jpeg",
  title = "Blog Başlığı",
  description = "Kısa blog açıklaması buraya gelecek. Blog içeriği hakkında özet bilgi.",
  author = "Yazar Adı",
  date = "22 Eylül 2025",
  slug,
}) => {
  const handleClick = () => {
    window.location.href = `/blog/${slug}`;
  };
  return (
    <div
      className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 max-w-sm cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-neutral-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard