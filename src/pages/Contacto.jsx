import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useClientes from '../hooks/useClientes'
import { Layout } from '../components/Layout'

function Contacto() {
  const location = useLocation()
  const navigate = useNavigate()
  const { crearCliente, loading, error, success, resetEstado } = useClientes()

  const servicioRecibido = location.state?.servicio || ''

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    servicio: servicioRecibido,
    website: '',
  })

  const [erroresLocales, setErroresLocales] = useState({})

  useEffect(() => {
    setForm(prev => ({ ...prev, servicio: servicioRecibido }))
  }, [servicioRecibido])

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        resetEstado()
        navigate('/')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [success])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErroresLocales(prev => ({ ...prev, [name]: '' }))
  }

  const validar = () => {
    if (form.website) return { bot: 'Bot detectado' }

    const errores = {}
    if (!form.nombre.trim()) errores.nombre = 'El nombre es requerido.'
    if (!form.apellido.trim()) errores.apellido = 'El apellido es requerido.'
    if (!form.correo.trim()) {
      errores.correo = 'El correo es requerido.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      errores.correo = 'Ingresa un correo válido.'
    }
    if (!form.telefono.trim()) {
      errores.telefono = 'El teléfono es requerido.'
    } else if (!/^\+?[\d\s\-]{7,15}$/.test(form.telefono)) {
      errores.telefono = 'Ingresa un teléfono válido.'
    }
    if (!form.servicio.trim()) errores.servicio = 'Selecciona un servicio.'
    return errores
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    resetEstado()
    const errores = validar()
    if (Object.keys(errores).length > 0) {
      setErroresLocales(errores)
      return
    }
    await crearCliente({
      nombre: form.nombre,
      apellido: form.apellido,
      correo: form.correo,
      telefono: form.telefono,
    })
  }

  const serviciosOpciones = [
    'Asesoría en Gestión Empresarial',
    'Capacitación y Talleres',
    'Herramientas Digitales',
    'Networking Empresarial',
    'Acceso a Financiamiento',
    'Diagnóstico Empresarial',
  ]

  return (
    <Layout navbar footer={true}>
      <section
        className="contacto-section"
        aria-labelledby="titulo-contacto"
      >
        {/* Fondo con imagen + overlay */}
        <div className="contacto-bg">
          <div className="contacto-overlay" />
        </div>

        <div className="container contacto-container">
          <div className="row align-items-center min-vh-100 py-5 g-5">

            {/* Columna izquierda — texto motivacional */}
            <div className="col-12 col-lg-6 contacto-texto">
              <span className="contacto-tag">Centro de Negocios Santiago</span>

              <h1 className="contacto-titulo">
                Impulsa tu empresa al
                <span> siguiente nivel</span>
              </h1>

              <p className="contacto-subtitulo">
                Nuestro equipo de expertos está listo para acompañarte.
                Completa el formulario y te contactaremos a la brevedad.
              </p>

              {/* Beneficios */}
              <div className="contacto-beneficios">
                {[
                  { icono: '✅', texto: 'Asesoría personalizada sin costo' },
                  { icono: '⚡', texto: 'Respuesta en menos de 24 horas' },
                  { icono: '🤝', texto: 'Acompañamiento durante todo el proceso' },
                  { icono: '📈', texto: 'Acceso a programas de financiamiento' },
                ].map((b, i) => (
                  <div key={i} className="beneficio-item">
                    <span className="beneficio-icono">{b.icono}</span>
                    <span className="beneficio-texto">{b.texto}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — formulario */}
            <div className="col-12 col-lg-5 offset-lg-1">
              <div className="contacto-card">

                <div className="contacto-card-header">
                  <h2 id="titulo-contacto">Comienza ahora</h2>
                  <p>Todos los campos son obligatorios</p>
                </div>

                {success && (
                  <div className="alert alert-success text-center" role="alert">
                    ✅ ¡Mensaje enviado! Redirigiendo...
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger" role="alert">
                    ❌ {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">

                  {/* Nombre y Apellido en fila */}
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="contacto-field">
                        <label htmlFor="nombre" className="visually-hidden">Nombre</label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          className={`contacto-input ${erroresLocales.nombre ? 'is-invalid' : ''}`}
                          value={form.nombre}
                          onChange={handleChange}
                          placeholder="Nombre"
                          aria-required="true"
                          aria-label="Nombre"
                        />
                        {erroresLocales.nombre && (
                          <div className="invalid-feedback">{erroresLocales.nombre}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="contacto-field">
                        <label htmlFor="apellido" className="visually-hidden">Nombre</label>
                        <input
                          type="text"
                          id="apellido"
                          name="apellido"
                          className={`contacto-input ${erroresLocales.apellido ? 'is-invalid' : ''}`}
                          value={form.apellido}
                          onChange={handleChange}
                          placeholder="Apellido"
                          aria-required="true"
                          aria-label="Apellido"
                        />
                        {erroresLocales.apellido && (
                          <div className="invalid-feedback">{erroresLocales.apellido}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="contacto-field">
                    <label htmlFor="correo" className="visually-hidden">Nombre</label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      className={`contacto-input ${erroresLocales.correo ? 'is-invalid' : ''}`}
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="Correo electrónico"
                      aria-required="true"
                      aria-label="Correo electrónico"
                    />
                    {erroresLocales.correo && (
                      <div className="invalid-feedback">{erroresLocales.correo}</div>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div className="contacto-field">
                    <label htmlFor="telefono " className="visually-hidden">Nombre</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className={`contacto-input ${erroresLocales.telefono ? 'is-invalid' : ''}`}
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                      aria-required="true"
                      aria-label="Teléfono"
                    />
                    {erroresLocales.telefono && (
                      <div className="invalid-feedback">{erroresLocales.telefono}</div>
                    )}
                  </div>

                  {/* Servicio */}
                  <div className="contacto-field">
                    <label htmlFor="servicio" className="visually-hidden">Nombre</label>
                    <select
                      id="servicio"
                      name="servicio"
                      className={`contacto-input contacto-select ${erroresLocales.servicio ? 'is-invalid' : ''}`}
                      value={form.servicio}
                      onChange={handleChange}
                      aria-required="true"
                      aria-label="Servicio de interés"
                    >
                      <option value="">Selecciona un servicio...</option>
                      {serviciosOpciones.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {erroresLocales.servicio && (
                      <div className="invalid-feedback">{erroresLocales.servicio}</div>
                    )}
                  </div>

                  
                  <div
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                    tabIndex="-1"
                  >
                    <label htmlFor="website">No completar este campo</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>


                    {/* Botón */}
                  <button
                    type="submit"
                    className="contacto-btn"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      'Contáctame ahora →'
                    )}
                  </button>

                  <p className="contacto-disclaimer">
                    🔒 Tu información está protegida y nunca será compartida
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contacto