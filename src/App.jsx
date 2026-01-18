import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookModal from "./components/BookModal";
import { searchBooks } from "./services/openLibrary";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (title) => {
    setLoading(true);
    try {
      const data = await searchBooks(title);
      setBooks(data.docs.slice(0, 15)); 
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-2 text-blue-700">
          📚 Book Finder App
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Search for books and explore their details instantly.
        </p>

        <SearchBar onSearch={handleSearch} />
        <BookList books={books} loading={loading} onSelect={setSelectedBook} />

        {selectedBook && (
          <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
        )}
      </div>
    </div>
  );
}

export default App;
