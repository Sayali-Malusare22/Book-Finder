import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books, loading, onSelect }) {
  if (loading) return <p className="text-center mt-6">Loading books...</p>;

  if (!books.length)
    return <p className="text-center mt-6 text-gray-600">No books found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {books.map((book) => (
        <BookCard key={book.key} book={book} onSelect={onSelect} />
      ))}
    </div>
  );
}
