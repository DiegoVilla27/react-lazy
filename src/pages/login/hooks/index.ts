import { useNavigate } from "react-router-dom";

const useLoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.setItem("token", "true");
    navigate("/");
  };

  return {
    onSubmit
  };
};

export default useLoginPage;
