import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-red-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Books Library</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/books" className="hover:underline">Index of Books</Link>
        <Link to="/upload" className="hover:underline">Uploads</Link>
      </nav>
    </div>
  );
}

export default NavBar;