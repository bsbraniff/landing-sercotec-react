import { faqData } from '../data/data'

function FAQ() {
  return (
    <section id="faq" className="py-5 bg-light" aria-labelledby="titulo-faq">
      <div className="container">

        <h2 id="titulo-faq" className="text-center fw-bold mb-2">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-muted mb-5">
          Resolvemos tus dudas más comunes
        </p>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {/* Accordion accesible con Bootstrap */}
            <div className="accordion" id="accordionFAQ">
              {faqData.map((item) => (
                <div className="accordion-item border mb-2 rounded" key={item.id}>
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq-${item.id}`}
                      aria-expanded="false"
                      aria-controls={`faq-${item.id}`}
                    >
                      {item.pregunta}
                    </button>
                  </h3>
                  <div
                    id={`faq-${item.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFAQ"
                  >
                    <div className="accordion-body text-muted">
                      {item.respuesta}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FAQ