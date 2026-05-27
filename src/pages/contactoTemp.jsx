import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useClientes from '../hooks/useClientes'
import { Layout } from '../components/Layout'

function contacto() {
  const location = useLocation()
  const navigate = useNavigate()
  const { crearCliente, loading, error, success, resetEstado } = useClientes()

  // Recibe el servicio que viene desde ServiceCard
  const servicioRecibido = location.state?.servicio || ''

  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    servicio: servicioRecibido,
    mensaje: '',
  })

  const [erroresLocales, setErroresLocales] = useState({})

  // Cuando cambia el servicio recibido, actualiza el form
  useEffect(() => {
    setForm(prev => ({ ...prev, servicio: servicioRecibido }))
  }, [servicioRecibido])

  // Si el envío fue exitoso, espera 3 segundos y vuelve al inicio
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
    // Limpia el error del campo cuando el usuario empieza a escribir
    setErroresLocales(prev => ({ ...prev, [name]: '' }))
  }

  // Validación del lado del cliente
  const validar = () => {
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

    // Primero valida en el cliente
    const errores = validar()
    if (Object.keys(errores).length > 0) {
      setErroresLocales(errores)
      return
    }

    // Envía solo los campos que acepta el backend
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
      <section className="py-5 bg-light" aria-labelledby="titulo-contacto">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">

              <h2 id="titulo-contacto" className="text-center fw-bold mb-2">
                Contáctanos
              </h2>
              <p className="text-center text-muted mb-4">
                Completa el formulario y te contactaremos a la brevedad.
              </p>

              {/* Mensaje de éxito */}
              {success && (
                <div className="alert alert-success text-center" role="alert">
                  ¡Mensaje enviado con éxito! Redirigiendo al inicio...
                </div>
              )}

              {/* Error del backend */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario de contacto"
              >
                {/* Nombre */}
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label fw-semibold">
                    Nombre <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className={`form-control ${erroresLocales.nombre ? 'is-invalid' : ''}`}
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    aria-required="true"
                    aria-describedby="nombre-error"
                  />
                  {erroresLocales.nombre && (
                    <div id="nombre-error" className="invalid-feedback">
                      {erroresLocales.nombre}
                    </div>
                  )}
                </div>

                {/* Apellido */}
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label fw-semibold">
                    Apellido <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className={`form-control ${erroresLocales.apellido ? 'is-invalid' : ''}`}
                    value={form.apellido}
                    onChange={handleChange}
                    placeholder="Tu apellido"
                    aria-required="true"
                    aria-describedby="apellido-error"
                  />
                  {erroresLocales.apellido && (
                    <div id="apellido-error" className="invalid-feedback">
                      {erroresLocales.apellido}
                    </div>
                  )}
                </div>

                {/* Correo */}
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label fw-semibold">
                    Correo electrónico <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    className={`form-control ${erroresLocales.correo ? 'is-invalid' : ''}`}
                    value={form.correo}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    aria-required="true"
                    aria-describedby="correo-error"
                  />
                  {erroresLocales.correo && (
                    <div id="correo-error" className="invalid-feedback">
                      {erroresLocales.correo}
                    </div>
                  )}
                </div>

                {/* Teléfono */}
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label fw-semibold">
                    Teléfono <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className={`form-control ${erroresLocales.telefono ? 'is-invalid' : ''}`}
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    aria-required="true"
                    aria-describedby="telefono-error"
                  />
                  {erroresLocales.telefono && (
                    <div id="telefono-error" className="invalid-feedback">
                      {erroresLocales.telefono}
                    </div>
                  )}
                </div>

                {/* Servicio — prellenado desde ServiceCard */}
                <div className="mb-3">
                  <label htmlFor="servicio" className="form-label fw-semibold">
                    Servicio de interés <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    className={`form-select ${erroresLocales.servicio ? 'is-invalid' : ''}`}
                    value={form.servicio}
                    onChange={handleChange}
                    aria-required="true"
                    aria-describedby="servicio-error"
                  >
                    <option value="">Selecciona un servicio...</option>
                    {serviciosOpciones.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {erroresLocales.servicio && (
                    <div id="servicio-error" className="invalid-feedback">
                      {erroresLocales.servicio}
                    </div>
                  )}
                </div>

                {/* Botón */}
                <div className="d-grid mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar mensaje'
                    )}
                  </button>
                </div>

                <p className="text-muted text-center mt-3" style={{ fontSize: '12px' }}>
                  <span className="text-danger">*</span> Campos obligatorios
                </p>
              </form>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contacto