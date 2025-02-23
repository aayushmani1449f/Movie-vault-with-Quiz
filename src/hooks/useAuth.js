import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/auth/me"); // Ensure this route is correct
        setUser(res.data.user);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return { user, logout }; // ✅ Ensure you return both user & logout
}
