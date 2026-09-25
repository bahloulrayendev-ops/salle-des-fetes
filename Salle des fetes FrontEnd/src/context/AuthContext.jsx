import { createContext, useContext, useState } from "react";
import { adminApi } from "../api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    const saved = sessionStorage.getItem("admin");
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (username, password) => {
    try {
      const loggedAdmin = await adminApi.login(username, password);
      setAdmin(loggedAdmin);
      sessionStorage.setItem("admin", JSON.stringify(loggedAdmin));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message || "Identifiants incorrects" };
    }
  };

  const logout = () => {
    setAdmin(null);
    sessionStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
