import { createContext } from "react";

interface AuthContextType {
  user: null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });
