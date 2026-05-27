import { serviciosData } from '../data/data'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <section id="servicios" className="py-5" aria-labelledby="titulo-servicios">
      <div className="container">

        <h2 id="titulo-servicios" className="text-center fw-bold mb-2">
          Nuestros Servicios
        </h2>
        <p className="text-center text-muted mb-5">
          Soluciones integrales para el crecimiento de tu empresa
        </p>

        <div className="row g-4">
          {serviciosData.map((servicio) => (
            <div className="col-12 col-md-6 col-lg-4" key={servicio.id}>
              <ServiceCard
                titulo={servicio.titulo}
                descripcion={servicio.descripcion}
                imagen={servicio.imagen}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services