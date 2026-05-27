import { Link } from 'react-router-dom'

function Navbar({ items = []}) {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <a className="navbar-brand fw-bold" href="#inicio" aria-label="Centro de Negocios SERCOTEC - Inicio">
          CN Santiago
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto gap-1" role="menubar">
            <li className="nav-item" role="none">
              <a className="nav-link" href="#inicio" role="menuitem">Inicio</a>
            </li>
            <li className="nav-item" role="none">
              <a className="nav-link" href="#nosotros" role="menuitem">Nosotros</a>
            </li>
            <li className="nav-item" role="none">
              <a className="nav-link" href="#servicios" role="menuitem">Servicios</a>
            </li>
            <li className="nav-item" role="none">
              <a className="nav-link" href="#faq" role="menuitem">FAQ</a>
            </li>
            <li className="nav-item" role="none">
              <Link
                className="nav-link btn btn-primary text-white px-3 ms-2"
                to="/contacto"
                role="menuitem"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
