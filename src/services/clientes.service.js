import axios from 'axios'

// Base URL — gracias al proxy de Vite, '/api' apunta a localhost:8000/api
const API_URL = '/api/clientes'

// GET — obtener todos los clientes
export const getClientes = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// GET por ID — obtener un cliente específico
export const getClienteById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

// POST — crear un nuevo cliente (formulario de contacto)
export const createCliente = async (datos) => {
  const response = await axios.post(API_URL, datos)
  return response.data
}

// PUT — actualizar cliente
export const updateCliente = async (id, datos) => {
  const response = await axios.put(`${API_URL}/${id}`, datos)
  return response.data
}

// DELETE — eliminar cliente
export const deleteCliente = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`)
  return response.data
}