import { NavLink } from "react-router-dom";

function Menu() {

  const menus = [
    { name: "Inicio", path: "/" },
    { name: "Avaliar", path: "/avaliar" },
    { name: "Filmes", path: "/filmes" },
    { name: "Séries", path: "/series" },
    { name: "Top Filmes", path: "/top-filmes" },
    { name: "Top Séries", path: "/top-series" }
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
