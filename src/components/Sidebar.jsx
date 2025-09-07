import { useState } from "react";

function Sidebar() {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showScripts, setShowScripts] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="w-64 bg-gray-100 p-4 border-r h-screen">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Languages Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => setShowLanguages(!showLanguages)}
          className="w-full text-left font-semibold flex justify-between items-center"
        >
          Languages
          <span>{showLanguages ? "▲" : "▼"}</span>
        </button>
        {showLanguages && (
          <div className="mt-2 space-y-2 pl-2">
            <label className="block">
              <input type="checkbox" /> English
            </label>
            <label className="block">
              <input type="checkbox" /> Hindi
            </label>
            <label className="block">
              <input type="checkbox" /> Marathi
            </label>
            <label className="block">
              <input type="checkbox" /> Sanskrit
            </label>
          </div>
        )}
      </div>

      {/* Scripts Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => setShowScripts(!showScripts)}
          className="w-full text-left font-semibold flex justify-between items-center"
        >
          Scripts
          <span>{showScripts ? "▲" : "▼"}</span>
        </button>
        {showScripts && (
          <div className="mt-2 space-y-2 pl-2">
            <label className="block">
              <input type="checkbox" /> English (Roman)
            </label>
            <label className="block">
              <input type="checkbox" /> Devanagari
            </label>
          </div>
        )}
      </div>

      {/* Categories Dropdown */}
      <div className="mb-4">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="w-full text-left font-semibold flex justify-between items-center"
        >
          Categories
          <span>{showCategories ? "▲" : "▼"}</span>
        </button>
        {showCategories && (
          <div className="mt-2 space-y-2 pl-2">
            <label className="block">
              <input type="checkbox" /> Astrology
            </label>
            <label className="block">
              <input type="checkbox" /> Tantra
            </label>
            <label className="block">
              <input type="checkbox" /> Yoga
            </label>
            <label className="block">
              <input type="checkbox" /> Philosophy
            </label>
            <label className="block">
              <input type="checkbox" /> Upanishad
            </label>
            <label className="block">
              <input type="checkbox" /> Veda
            </label>
            <label className="block">
              <input type="checkbox" /> Bhashya
            </label>
            <label className="block">
              <input type="checkbox" /> Purana
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;