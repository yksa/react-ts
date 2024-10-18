import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
  redirectPath?: string;
};

const ProtectedRoute = ({
  children,
  redirectPath = "/",
}: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: redirectPath }} />;
  }

  return children;
};

export default ProtectedRoute;
