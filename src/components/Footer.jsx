const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">MiApp</h5>
            <p className="text-white-50" style={{ fontSize: "14px" }}>
              Descripción breve de tu empresa o proyecto.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6
              className="text-uppercase fw-semibold mb-3"
             
              style={{ fontSize: "12px" }}
            >
              Empresa
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Nosotros
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Carreras
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h6
              className="text-uppercase fw-semibold mb-3"
             style={{ fontSize: "12px" }}
            >
              Newsletter
            </h6>
            <div className="input-group">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="tu@correo.com"
              />
              <button className="btn btn-primary btn-sm">Suscribir</button>
            </div>
          </div>
        </div>

        <hr  />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="text-white-50 mb-0" style={{ fontSize: "12px" }}>
            © 2025 MiApp.
          </p>
          <div className="d-flex gap-3">
            <a
              href="#"
              className="text-white-50 text-decoration-none"
              style={{ fontSize: "12px" }}
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-white-50 text-decoration-none"
              style={{ fontSize: "12px" }}
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
