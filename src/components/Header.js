import Link from "next/link";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth"; // Ensure correct import

export default function Header() {
  const { user, logout } = useAuth(); // ✅ Destructure user & logout from useAuth()
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-yellow-400">
        IMDb Clone
      </Link>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-700 px-3 py-1 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* ✅ Conditional Login/Logout Button */}
        {user ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link href="/login" className="bg-blue-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
