// Function to fetch books from OpenLibrary API
export async function searchBooks(title) {
  const encodedTitle = encodeURIComponent(title.trim());
  const url = `https://openlibrary.org/search.json?title=${encodedTitle}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
