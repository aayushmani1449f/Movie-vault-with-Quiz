import { useState, useEffect, createContext, useContext } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is stored in cookies
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData), { expires: 7 });
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export default function useAuth() {
  return useContext(AuthContext);
}
