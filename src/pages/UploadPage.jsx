function UploadPage() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-orange-100 to-white">
      <h1 className="text-3xl font-bold text-orange-700">Upload a Book</h1>

      <form className="mt-6 space-y-4 max-w-lg">
        {/* Book Title */}
        <input
          type="text"
          placeholder="Book Title"
          className="w-full border rounded p-2"
        />

        {/* Author */}
        <input
          type="text"
          placeholder="Author Name"
          className="w-full border rounded p-2"
        />

        {/* Year of Publication */}
        <input
          type="number"
          placeholder="Year of Publication"
          className="w-full border rounded p-2"
        />

        {/* Language Dropdown */}
        <select className="w-full border rounded p-2">
          <option>Select Language</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
          <option>Sanskrit</option>
        </select>

        {/* Script Dropdown */}
        <select className="w-full border rounded p-2">
          <option>Select Script</option>
          <option>English (Roman)</option>
          <option>Devanagari</option>
        </select>

        {/* Category Dropdown */}
        <select className="w-full border rounded p-2">
          <option>Select Category</option>
          <option>Astrology</option>
          <option>Tantra</option>
          <option>Yoga</option>
          <option>Philosophy</option>
          <option>Upanishad</option>
          <option>Veda</option>
          <option>Bhashya</option>
          <option>Purana</option>
        </select>

        {/* File Upload */}
        <input
          type="file"
          className="w-full border rounded p-2"
          accept=".pdf,.epub"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default UploadPage;
