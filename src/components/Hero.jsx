import { useEffect, useState } from 'react'

function Hero() {
  const [visible, setVisible] = useState(false)

  // Activa la animación al cargar
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleVerServicios = () => {
    const seccion = document.getElementById('servicios')
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1b4f72 50%, #2e86c1 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Círculos decorativos de fondo */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.04)', pointerEvents: 'none'
      }} />

      <div className="container py-5">
        <div className="row align-items-center g-5">

          {/* Texto */}
          <div
            className="col-md-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <span style={{
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500',
              display: 'inline-block',
              marginBottom: '16px',
              backdropFilter: 'blur(10px)'
            }}>
              🏢 Centro de Negocios Santiago — SERCOTEC
            </span>

            <h1 style={{
              color: '#ffffff',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '20px'
            }}>
              Impulsamos el crecimiento de tu{' '}
              <span style={{ color: '#5dade2' }}>empresa</span>
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              Acompañamiento integral para micro, pequeñas y medianas empresas.
              Asesorías, capacitaciones y acceso a financiamiento para llevar
              tu negocio al siguiente nivel.
            </p>

            <div className="d-flex flex-wrap gap-3">
              {/* Botón principal con animación */}
              <button
                onClick={handleVerServicios}
                aria-label="Ver servicios disponibles"
                style={{
                  background: 'linear-gradient(90deg, #2e86c1, #5dade2)',
                  border: 'none',
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(46,134,193,0.5)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  animation: visible ? 'pulse 2s infinite' : 'none'
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)'
                  e.target.style.boxShadow = '0 8px 30px rgba(46,134,193,0.7)'
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'translateY(0) scale(1)'
                  e.target.style.boxShadow = '0 4px 20px rgba(46,134,193,0.5)'
                }}
              >
                🚀 Ver Servicios
              </button>

              {/* Botón secundario */}
              <button
                onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Conocer más sobre nosotros"
                style={{
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.5)',
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => {
                  e.target.style.background = 'rgba(255,255,255,0.1)'
                  e.target.style.borderColor = '#fff'
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent'
                  e.target.style.borderColor = 'rgba(255,255,255,0.5)'
                }}
              >
                Conocer más →
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div
            className="col-md-6 text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s'
            }}
          >
            <div style={{
              position: 'relative',
              display: 'inline-block'
            }}>
              {/* Glow detrás de la imagen */}
              <div style={{
                position: 'absolute', inset: '-10px',
                background: 'radial-gradient(circle, rgba(93,173,226,0.3), transparent 70%)',
                borderRadius: '20px', filter: 'blur(15px)'
              }} />
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                alt="Equipo del Centro de Negocios SERCOTEC trabajando en conjunto"
                loading="lazy"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  position: 'relative'
                }}
              />

              {/* Badge flotante */}
              <div style={{
                position: 'absolute', bottom: '20px', left: '-20px',
                background: '#fff',
                borderRadius: '12px',
                padding: '10px 16px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                display: 'flex', alignItems: 'center', gap: '8px',
                animation: 'float 3s ease-in-out infinite'
              }}>
                <span style={{ fontSize: '24px' }}>✅</span>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px', color: '#0d1b2a' }}>500+ Empresas</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>apoyadas exitosamente</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(46,134,193,0.5); }
          50% { box-shadow: 0 4px 35px rgba(46,134,193,0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  )
}

export default Hero