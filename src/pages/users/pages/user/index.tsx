import { useUserPage } from "./hooks";

const UserPage = () => {
  const { user } = useUserPage();

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{user?.name + " " + user?.lastname}</h2>
        <p className="card-subtitle">{user?.profession}</p>
      </div>
      <div className="card-body">
        <ul>
          <li>
            <strong>Edad:</strong> {user?.age} años
          </li>
          <li>
            <strong>Email:</strong> {user?.email}
          </li>
          <li>
            <strong>Teléfono:</strong> {user?.phone}
          </li>
          <li>
            <strong>Dirección:</strong> {user?.address}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
