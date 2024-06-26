import { Navigate } from "react-router-dom";

interface IProps {
  children: React.ReactElement;
}

const PublicRouteGuard = ({ children }: IProps) => {
  const token: string = localStorage.getItem("token")!;

  if (token) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
};

export default PublicRouteGuard;
