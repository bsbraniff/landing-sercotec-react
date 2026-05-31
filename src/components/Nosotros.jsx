import { useEffect, useRef, useState } from 'react'
import { nosotrosData } from '../data/data'

const valorIconos = {
  'Compromiso': (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  'Innovación': (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  'Cercanía': (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  'Excelencia': (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
}

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

function AnimatedNumber({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView(0.3)

  useEffect(() => {
    if (!inView) return
    const numeric = parseFloat(target.toString().replace(/[^0-9.]/g, ''))
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(numeric * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

function getSuffix(numero) {
  return numero.toString().replace(/[0-9]/g, '')
}

function Nosotros() {
  const { descripcion, mision, vision, valores, stats } = nosotrosData
  const [sectionRef, sectionInView] = useInView(0.1)

  return (
    <section
      id="nosotros"
      className="nosotros-section py-5"
      aria-labelledby="titulo-nosotros"
      ref={sectionRef}
    >
      <div className="container">

        {/* Encabezado */}
        <div className={`text-center mb-5 nosotros-header ${sectionInView ? 'visible' : ''}`}>
          <span className="nosotros-label d-inline-block mb-2">Quiénes somos</span>
          <h2 id="titulo-nosotros" className="fw-bold mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
            Centro de Negocios Santiago
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 600, lineHeight: 1.8 }}>
            {descripcion}
          </p>
        </div>

        {/* Stats con número animado */}
        <div className="row g-3 mb-5">
          {stats.map((stat, i) => (
            <div key={i} className="col-6 col-md-3">
              <div
                className="stat-card"
                style={{ animationDelay: `${i * 0.12}s` }}
                aria-label={`${stat.numero} ${stat.label}`}
              >
                <h3 className="fw-bold mb-1" style={{ fontSize: '2.4rem', lineHeight: 1 }}>
                  <AnimatedNumber
                    target={stat.numero}
                    suffix={getSuffix(stat.numero)}
                    duration={1600 + i * 200}
                  />
                </h3>
                <small style={{ opacity: 0.88, fontSize: '0.82rem', letterSpacing: '0.3px' }}>
                  {stat.label}
                </small>
              </div>
            </div>
          ))}
        </div>

        {/* Misión y Visión */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="mission-card h-100">
              <div
                className="mission-icon mb-3"
                style={{ background: 'rgba(46,134,193,0.1)', color: '#2e86c1' }}
                aria-hidden="true"
              >
                🎯
              </div>
              <h5>Misión</h5>
              <p>
                {mision} Brindamos acompañamiento preventivo para prolongar la vida útil
                de los negocios y correctivo para resolver desafíos que afecten su
                crecimiento, con un enfoque centrado en las personas y sus proyectos.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mission-card h-100">
              <div
                className="mission-icon mb-3"
                style={{ background: 'rgba(46,134,193,0.1)', color: '#2e86c1' }}
                aria-hidden="true"
              >
                🔭
              </div>
              <h5>Visión</h5>
              <p>
                {vision} Aspiramos a construir un ecosistema empresarial donde toda MiPyme
                tenga acceso a herramientas, redes y conocimiento para competir y crecer
                de manera sostenible en el mercado chileno.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="text-center">
          <span className="nosotros-label d-inline-block mb-2">Lo que nos define</span>
          <h4 className="fw-bold mb-4">Nuestros Valores</h4>
          <div className="row g-3 justify-content-center">
            {valores.map((v, i) => (
              <div key={i} className="col-6 col-sm-3">
                <div
                  className="valor-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="valor-icon-wrapper" aria-hidden="true">
                    {valorIconos[v] ?? (
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                      </svg>
                    )}
                  </div>
                  <span className="valor-nombre">{v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Nosotros