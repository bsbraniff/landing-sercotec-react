import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-4">

          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold text-white mb-1">Centro de Negocios</h5>
            <span className="footer-brand-subtitle d-inline-block mb-3">
              Santiago — SERCOTEC
            </span>
            <p className="footer-description">
              Apoyamos el crecimiento de micro, pequeñas y medianas empresas
              de la Región Metropolitana con asesoría, capacitación y
              vinculación empresarial.
            </p>
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-col-title">Navegación</h6>
            <ul className="list-unstyled mb-0">
              {[
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Testimonios', href: '#testimonios' },
                { label: 'Preguntas frecuentes', href: '#faq' },
              ].map((link, i) => (
                <li key={i} className="mb-2">
                  <a href={link.href} className="footer-link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-col-title">Contacto</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2 d-flex align-items-start gap-2">
                <span className="footer-icon">📍</span>
                <span className="footer-contact-text">
                  Manuel Rodríguez Sur 749, Santiago
                </span>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <span className="footer-icon">✉️</span>
                <span className="footer-contact-text">
                  centro.santiago@centrossercotec.cl
                </span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <span className="footer-icon">🌐</span>
                <span className="footer-contact-text">
                  sitios.sercotec.cl
                </span>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-col-title">Newsletter</h6>
            <p className="footer-newsletter-text">
              Recibe novedades sobre programas y talleres.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="tu@correo.com"
                aria-label="Correo para newsletter"
              />
              <button className="btn btn-primary btn-sm">Suscribir</button>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <p className="footer-copy mb-0">
            © 2026 Centro de Negocios Santiago — SERCOTEC. Todos los derechos reservados.
          </p>
          <div className="d-flex gap-3">
            <a href="#" className="footer-link footer-copy">Privacidad</a>
            <a href="#" className="footer-link footer-copy">Términos</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer