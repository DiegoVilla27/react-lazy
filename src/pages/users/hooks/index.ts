import { useNavigate } from "react-router-dom";

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  profession: string;
}

export const users: IUser[] = [
  {
    id: 1,
    name: "Juan",
    lastname: "Pérez",
    email: "juan.perez@example.com",
    age: 28,
    phone: "123-456-7890",
    address: "Calle Falsa 123, Ciudad, País",
    profession: "Ingeniero"
  },
  {
    id: 2,
    name: "María",
    lastname: "García",
    email: "maria.garcia@example.com",
    age: 34,
    phone: "234-567-8901",
    address: "Avenida Siempre Viva 456, Ciudad, País",
    profession: "Doctora"
  },
  {
    id: 3,
    name: "Carlos",
    lastname: "Sánchez",
    email: "carlos.sanchez@example.com",
    age: 22,
    phone: "345-678-9012",
    address: "Boulevard Principal 789, Ciudad, País",
    profession: "Estudiante"
  },
  {
    id: 4,
    name: "Ana",
    lastname: "Martínez",
    email: "ana.martinez@example.com",
    age: 30,
    phone: "456-789-0123",
    address: "Calle Segunda 101, Ciudad, País",
    profession: "Abogada"
  },
  {
    id: 5,
    name: "Luis",
    lastname: "Fernández",
    email: "luis.fernandez@example.com",
    age: 40,
    phone: "567-890-1234",
    address: "Avenida Tercera 202, Ciudad, País",
    profession: "Arquitecto"
  }
];

const useUsersPage = () => {
  const navigate = useNavigate();

  const selectedUser = (user: IUser) => {
    navigate(`/users/${user.id}`);
  };

  return {
    users,
    selectedUser
  };
};

export default useUsersPage;
