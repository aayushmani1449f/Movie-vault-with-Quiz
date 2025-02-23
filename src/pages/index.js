import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieCard from "../components/Moviecard";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>IMDb Clone</title>
      </Head>
      <Header />
      <main className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-yellow-400">
          Welcome to IMDb Clone
        </h1>
        <p className="text-gray-300 mt-2">Discover Movies, TV Shows, and More!</p>

        {/* Example Movies Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
          <MovieCard movie={{ title: "Inception", description: "A mind-bending thriller", id: 1 }} />
          <MovieCard movie={{ title: "The Dark Knight", description: "A legendary Batman movie", id: 2 }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
