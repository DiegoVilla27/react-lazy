import { Outlet } from "react-router-dom";
import LayoutPages from "../../layouts";
import useUsersPage, { IUser } from "./hooks";

const UsersPage = () => {
  const { users, selectedUser } = useUsersPage();

  return (
    <LayoutPages>
      <>
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => selectedUser(user)}>Ver</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr style={{ margin: "20px 0px" }} />
        <Outlet />
      </>
    </LayoutPages>
  );
};

export default UsersPage;
