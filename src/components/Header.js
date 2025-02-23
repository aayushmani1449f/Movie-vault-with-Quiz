import Link from "next/link";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth"; // Ensure correct import

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { user, logout } = useAuth(); // Ensure useAuth works

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <>
      {/* Header */}
      <header className="bg-gray-900 dark:bg-black text-white flex justify-between items-center p-4 shadow-md">
        <Link href="/" className="text-yellow-400 text-2xl font-bold hover:text-yellow-300 transition">
          IMDb Clone
        </Link>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode} 
            className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Auth Button */}
          {user ? (
            <button 
              onClick={logout} 
              className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded transition"
            >
              Logout
            </button>
          ) : (
            <button 
              onClick={openLogin} 
              className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded transition"
            >
              Login
            </button>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {isLoginOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeLogin}
        >
          <div 
            className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
          >
            <button 
              onClick={closeLogin} 
              className="absolute top-2 right-3 text-xl"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-2 mb-3 bg-gray-800 rounded"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-2 mb-3 bg-gray-800 rounded"
              />
              <button className="bg-yellow-500 w-full py-2 rounded hover:bg-yellow-400 transition">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
