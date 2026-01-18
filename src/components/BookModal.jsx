import React from "react";

export default function BookModal({ book, onClose }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-3xl shadow-lg p-6 max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <img
          src={coverUrl}
          alt={book.title}
          className="w-44 h-64 mx-auto object-cover rounded-xl shadow-sm"
        />
        <h2 className="text-2xl font-bold mt-4 text-center text-blue-700">
          {book.title}
        </h2>
        <p className="text-center text-gray-600">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-center text-gray-500 mt-1">
          First Published: {book.first_publish_year || "N/A"}
        </p>
        <a
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noreferrer"
          className="block mt-4 text-center text-blue-600 font-medium hover:underline"
        >
          View on Open Library →
        </a>
      </div>
    </div>
  );
}
