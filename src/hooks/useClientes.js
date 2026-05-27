import { useState, useEffect } from 'react'
import { getClientes, createCliente } from '../services/clientes.service'

const useClientes = ({ autoFetch = false } = {}) => {
  const [clientes, setClientes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const fetchClientes = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getClientes()
      setClientes(data)
    } catch (err) {
      setError('Error al cargar los clientes.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const crearCliente = async (datos) => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      const nuevo = await createCliente(datos)
      setClientes(prev => [...prev, nuevo])
      setSuccess(true)
      return nuevo
    } catch (err) {
      if (err.response?.data?.errors) {
        const mensajes = Object.values(err.response.data.errors).flat()
        setError(mensajes.join(' | '))
      } else {
        setError('Error al enviar el formulario. Intenta nuevamente.')
      }
      console.error(err)
      return null
    } finally {
      setLoading(false)
    }
  }

  const resetEstado = () => {
    setError(null)
    setSuccess(false)
  }

  // Solo hace GET automático si autoFetch es true
  useEffect(() => {
    if (autoFetch) fetchClientes()
  }, [])

  return { clientes, loading, error, success, fetchClientes, crearCliente, resetEstado }
}

export default useClientes