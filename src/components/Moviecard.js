import Link from "next/link";
import Image from "next/image";

const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A mind-bending thriller",
    image: "/images/inception.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A journey beyond the stars",
    image: "/images/interstellar.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description: "A hero emerges in Gotham",
    image: "/images/dark-knight.jpg",
  },
  {
    id: 4,
    title: "Shutter Island",
    description: "A psychological thriller",
    image: "/images/shutter-island.jpg",
  },
];

export default function MovieCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <div className="relative w-full h-60">
            <Image
              src={movie.image}
              alt={movie.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
          <p className="text-gray-400">{movie.description}</p>
          <Link
            href={`/movies/${movie.id}`}
            className="text-yellow-400 mt-2 inline-block"
          >
            View Details →
          </Link>
        </div>
      ))}
    </div>
  );
}
