import React from "react";

export default function BookCard({ book, onSelect }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div
      onClick={() => onSelect(book)}
      className="bg-white p-4 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer"
    >
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-64 object-cover rounded-xl"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {book.first_publish_year || ""}
        </p>
      </div>
    </div>
  );
}
