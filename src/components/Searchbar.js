import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  return (
    <div className="flex justify-center my-5">
      <input 
        type="text" 
        placeholder="Search movies..." 
        className="p-2 rounded-l bg-gray-700 text-white"
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        onClick={() => onSearch(query)} 
        className="bg-yellow-500 text-black p-2 rounded-r">Search</button>
    </div>
  );
}