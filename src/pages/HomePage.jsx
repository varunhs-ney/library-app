import { useState } from "react";

function HomePage() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // You can wire this to your backend or filter logic later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-white flex justify-center pt-20">
      <div className="text-center max-w-xl w-full px-6">
        <h1 className="text-4xl font-bold text-orange-700 mb-4">Library</h1>
        <p className="text-gray-700 mb-6">
          Welcome to the library. Use filters to search and explore your books.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;