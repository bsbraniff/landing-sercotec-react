import { nosotrosData } from '../data/data'

function Nosotros() {
  const { titulo, descripcion, mision, vision, valores, stats } = nosotrosData

  return (
    <section id="nosotros" className="py-5" aria-labelledby="titulo-nosotros">
      <div className="container">

        <h2 id="titulo-nosotros" className="text-center fw-bold mb-2">
          Nosotros
        </h2>
        <p className="text-center text-muted mb-5">{descripcion}</p>

        {/* Stats */}
        <div className="row g-3 mb-5">
          {stats.map((stat, i) => (
            <div key={i} className="col-6 col-md-3 text-center">
              <div className="p-3 bg-primary text-white rounded shadow-sm">
                <h3 className="fw-bold mb-0">{stat.numero}</h3>
                <small>{stat.label}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Misión y Visión */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body">
                <h5 className="fw-bold text-primary">🎯 Misión</h5>
                <p className="text-muted">{mision}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm p-3">
              <div className="card-body">
                <h5 className="fw-bold text-primary">🔭 Visión</h5>
                <p className="text-muted">{vision}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center">
          <h5 className="fw-bold mb-3">Nuestros Valores</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {valores.map((v, i) => (
              <span key={i} className="badge bg-primary fs-6 px-3 py-2">
                {v}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Nosotros
