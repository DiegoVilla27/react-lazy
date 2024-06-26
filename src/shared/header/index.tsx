import { NavLink } from "react-router-dom";

const HeaderShared = () => {
  const routes: Record<string, string>[] = [
    {
      path: "/",
      label: "Home"
    },
    {
      path: "/users",
      label: "Users"
    },
    {
      path: "/about",
      label: "About"
    }
  ];

  return (
    <header>
      <nav>
        <ul className="navbar">
          {routes.map((route) => (
            <li key={route.label}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderShared;
