import { testimoniosData } from '../data/data'
import { useState } from 'react'

function Estrellas({ cantidad }) {
  return (
    <div aria-label={`${cantidad} de 5 estrellas`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < cantidad ? 'text-warning' : 'text-secondary'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

function Testimonios() {
  const [actual, setActual] = useState(0)
  const total = testimoniosData.length

  const anterior = () => setActual((prev) => (prev - 1 + total) % total)
  const siguiente = () => setActual((prev) => (prev + 1) % total)

  const testimonio = testimoniosData[actual]

  return (
    <section id="testimonios" className="py-5 bg-primary text-white" aria-labelledby="titulo-testimonios">
      <div className="container">

        <h2 id="titulo-testimonios" className="text-center fw-bold mb-5">
          Lo que dicen nuestros clientes
        </h2>

        {/* Carrusel */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div
              className="card text-dark shadow-lg p-4 text-center"
              role="region"
              aria-live="polite"
              aria-label="Testimonio de cliente"
            >
              <Estrellas cantidad={testimonio.estrellas} />

              <p className="mt-3 fst-italic fs-5">
                "{testimonio.texto}"
              </p>

              <div className="mt-3">
                <strong>{testimonio.nombre}</strong>
                <br />
                <small className="text-muted">{testimonio.empresa}</small>
              </div>
            </div>

            {/* Controles */}
            <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
              <button
                className="btn btn-light btn-sm px-3"
                onClick={anterior}
                aria-label="Testimonio anterior"
              >
                ← Anterior
              </button>

              {/* Indicadores */}
              <div className="d-flex gap-2" role="tablist" aria-label="Testimonios">
                {testimoniosData.map((_, i) => (
                  <button
                    key={i}
                    className={`btn btn-sm rounded-circle p-0 ${i === actual ? 'btn-light' : 'btn-outline-light'}`}
                    style={{ width: '12px', height: '12px' }}
                    onClick={() => setActual(i)}
                    aria-label={`Ver testimonio ${i + 1}`}
                    aria-selected={i === actual}
                    role="tab"
                  />
                ))}
              </div>

              <button
                className="btn btn-light btn-sm px-3"
                onClick={siguiente}
                aria-label="Testimonio siguiente"
              >
                Siguiente →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonios