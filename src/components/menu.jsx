import { NavLink } from "react-router-dom";

function Menu() {

  const menus = [
    { name: "Inicio", path: "/" },
    { name: "Cadastrar", path: "/cadastrar" },
  ];

  return (

    <nav className="menu">
      {menus.map((menu, index) => (
        <NavLink
          key={index}
          to={menu.path}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          >
            {menu.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
