export default function MovieCard({ movie }) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
}
