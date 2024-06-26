import { Navigate } from "react-router-dom";

interface IProps {
  children: React.ReactElement;
}

const PrivateRouteGuard = ({ children }: IProps) => {
  const token: string = localStorage.getItem("token")!;

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
};

export default PrivateRouteGuard;
