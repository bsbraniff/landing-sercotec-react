# Guía de Buenas Prácticas — React + Vite + Bootstrap

## 1. Nomenclatura de componentes
Los componentes siempre en **PascalCase**.
```jsx
// Correcto
function ServiceCard() {}

// Incorrecto
function servicecard() {}
function service_card() {}
```

## 2. Nomenclatura de archivos
| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Componente | PascalCase | `ServiceCard.jsx` |
| Hook | camelCase con `use` | `useClientes.js` |
| Servicio | camelCase con `.service` | `clientes.service.js` |
| Datos | camelCase con `.js` | `data.js` |
| Página | camelCase | `home.jsx` |

## 3. Estructura de carpetas
Separar siempre por responsabilidad:
```
src/
├── components/   → piezas visuales reutilizables
├── pages/        → vistas completas (una por ruta)
├── hooks/        → lógica reutilizable con estado
├── services/     → llamadas HTTP al backend
└── data/         → datos locales / API interna
```

## 4. Props: siempre documentar y validar
```jsx
// Correcto — props claras y nombradas
function ServiceCard({ titulo, descripcion, imagen }) {
  return <div>{titulo}</div>
}

// Incorrecto — prop genérica sin estructura
function ServiceCard({ data }) {
  return <div>{data.titulo}</div>
}
```

## 5. Separación de lógica y vista (hooks)
Nunca poner llamadas fetch/axios directamente en el componente.
```jsx
// Correcto — lógica en hook, vista en componente
const { crearCliente, loading } = useClientes()

// Incorrecto — axios dentro del componente
const handleSubmit = async () => {
  const res = await axios.post('/api/clientes', datos) // no hacer esto
}
```

## 6. Manejo de estados de carga y error
Todo fetch debe manejar los tres estados:
```jsx
if (loading) return <p>Cargando...</p>
if (error)   return <p className="text-danger">{error}</p>
return <div>{/* contenido */}</div>
```

## 7. Accesibilidad obligatoria
Todo componente interactivo debe tener:
```jsx
// Imágenes
<img alt="Descripción real de la imagen" loading="lazy" />

// Botones sin texto visible
<button aria-label="Cerrar modal">✕</button>

// Formularios
<label htmlFor="correo">Correo</label>
<input id="correo" aria-required="true" aria-describedby="correo-error" />
```

## 8. Variables de entorno para URLs
Nunca hardcodear URLs del backend:
```js
// Correcto — usar proxy de Vite o variable de entorno
const API_URL = '/api/clientes'

// Incorrecto
const API_URL = 'http://localhost:8000/api/clientes'
```

## 9. Commits descriptivos en Git
```bash
# Correcto
git commit -m "feat: agrega componente ServiceCard con navegación al formulario"
git commit -m "fix: corrige validación de correo en formulario de contacto"
git commit -m "docs: actualiza README con instrucciones de instalación"

# Incorrecto
git commit -m "cambios"
git commit -m "fix"
```

## 10. Uso de keys en listas
Siempre usar un identificador único, nunca el índice:
```jsx
// Correcto
{servicios.map((s) => <ServiceCard key={s.id} {...s} />)}

// Incorrecto
{servicios.map((s, i) => <ServiceCard key={i} {...s} />)}
```



## 11. Protección de formularios contra bots (honeypot)

Implementar un campo trampa invisible para humanos pero detectable para bots automatizados.

**Acción:** Agregar un input oculto con CSS que los bots completan automáticamente.  
**Herramienta:** CSS + validación JavaScript en el handler del formulario.  
**Resultado esperado:** Envíos automáticos maliciosos son ignorados sin mostrar errores al usuario.

```jsx
// Campo trampa en el JSX (invisible para humanos)
<input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" />

// Validación en el handler
if (form.website) return // Si vino relleno → es un bot, ignorar
```