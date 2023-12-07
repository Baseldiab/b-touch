import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import { ReactNode } from "react";

interface RequireAuthProps {
  children: ReactNode;
}

// eslint-disable-next-line react/prop-types
const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = useAuth();
  // console.log(auth.isLogged);
  const location = useLocation();
  if (!auth.isLogged) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
export default RequireAuth;
