export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="p-2 border rounded"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}