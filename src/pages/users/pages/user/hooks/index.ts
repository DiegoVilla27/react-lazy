import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser, users } from "../../../hooks";

export const useUserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>();

  const getUser = () => {
    const user = users.find((user: IUser) => user.id === Number(id!));
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return {
    user
  };
};
