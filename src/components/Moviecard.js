import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-white truncate">{movie.title}</h2>
        <p className="text-gray-400 text-sm mt-2 line-clamp-2">{movie.description}</p>
        <Link href={`/movie/${movie.id}`} className="inline-block mt-3 text-yellow-400 font-semibold hover:underline">
          View Details →
        </Link>
      </div>
    </div>
  );
}
