import { useContext } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";

type Token = string;

interface AuthContextType {
  login: (token: Token, username: string) => void;
  logout: () => void;
  isLogedIn: (token: boolean) => void;
  isLogged: boolean;
  token: string | null;
  username: string | null;
}

export const AuthContext = createContext<AuthContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  isLogedIn: () => {},
  isLogged: false,
  token: "",
  username: "",
});

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const tokenInitial = () => {
    const token = localStorage.getItem("token");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return token;
  };
  const nameInitial = () => {
    const username = localStorage.getItem("username");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return username;
  };
  const checkLogin = () => {
    const isLogged = localStorage.getItem("isLogged");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return isLogged ? JSON.parse(isLogged) : false;
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const [token, setToken] = useState<string | null>(tokenInitial);
  const [username, setUsername] = useState<string | null>(nameInitial);
  const [isLogged, setIsLogged] = useState<boolean>(checkLogin);

  const isLogedIn = (checkLogin: boolean) => {
    if (checkLogin) {
      setIsLogged(checkLogin);
      localStorage.setItem("isLogged", JSON.stringify(checkLogin));
    } else {
      setIsLogged(checkLogin);
      localStorage.setItem("isLogged", JSON.stringify(checkLogin));
    }
  };
  const login = (token: Token, username: string) => {
    setUsername(username);
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken("");
    setUsername("");
    setIsLogged(false);
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("isLogged");
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, isLogedIn, isLogged, token, username }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
