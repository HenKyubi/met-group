import React from "react";

const Home = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          CRUD prueba técnica
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLinkUsuarios"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuarios
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLinkUsuarios"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Crear
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Articulos
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Crear
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Actualizar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ver
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Eliminar
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tiendas
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Crear
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ver
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Eliminar
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Home;
