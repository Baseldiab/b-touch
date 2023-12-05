import { useContext } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";

type User = string;

interface AuthContextType {
  login: (user: User) => void;
  logout: () => void;
  checkAdmin: (name: string) => void;
  user: User;
  isAdmin: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  checkAdmin: () => {},
  user: "",
  isAdmin: false,
});

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const userNameInitial = () => {
    const user = localStorage.getItem("user");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return user ? JSON.parse(user) : null;
  };
  const adminInitial = () => {
    const admin = localStorage.getItem("admin");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return admin ? JSON.parse(admin) : false;
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const [isAdmin, setAdmin] = useState<boolean>(adminInitial());
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const [user, setUser] = useState<User>(userNameInitial());

  const checkAdmin = (name: string) => {
    if (name === "johnd") {
      setAdmin(true);
      localStorage.setItem("admin", JSON.stringify(true));
    } else {
      setAdmin(false);
      localStorage.setItem("admin", JSON.stringify(false));
    }
  };
  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("user", user);
  };

  const logout = () => {
    setUser("");
    setAdmin(false);
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
  };

  return (
    <AuthContext.Provider value={{ login, logout, checkAdmin, user, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
