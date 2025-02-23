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
      <main className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-yellow-400 text-center">Welcome to IMDb Clone</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* Movie List */}
        </div>
        <MovieCard />
      </main>
      <Footer />
    </div>
  );
}
