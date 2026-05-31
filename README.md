# Centro de Negocios Santiago - SERCOTEC
Landing page desarrollada con React + Vite + Bootstrap 5 para el Centro de Negocios Santiago de SERCOTEC.

## Equipo
- [Bárbara Santa María Braniff]
- [Elizabeth Pizarro Lara]


---

## Objetivo del proyecto

Desarrollar una landing page moderna, accesible e interactiva para el Centro de Negocios Santiago de SERCOTEC, utilizando React y Bootstrap, integrando consumo de API, componentes reutilizables y buenas prácticas de desarrollo frontend.

## Tecnologías utilizadas
- React 18
- Vite 5
- Bootstrap 5
- React Router DOM 6
- Axios

---

## Estructura del Proyecto

```bash
src/
├── components/
│   ├── FAQ.jsx → Sección preguntas frecuentes (accordion)
│   ├── Footer.jsx → Pie de página
│   ├── Hero.jsx → Sección principal de bienvenida
│   ├── Layout.jsx → Envuelve navbar + contenido + footer
│   ├── Navbar.jsx → Navegación principal sticky
│   ├── Nosotros.jsx → Sección misión, visión y valores
│   ├── Service.jsx → Grilla de tarjetas de servicios
│   ├── ServiceCard.jsx → Tarjeta reutilizable de servicio
│   └── Testimonios.jsx → Carrusel de testimonios

├── data/
│   └── data.js → API interna (CMS de contenido)

├── hooks/
│   └── useClientes.js → Hook reutilizable GET/POST

├── pages/
│   ├── Contacto.jsx → Formulario de contacto
│   └── home.jsx → Página principal

├── services/
│   └── clientes.service.js → Llamadas HTTP al backend

├── App.jsx → Definición de rutas
└── main.jsx → Punto de entrada
```

---


## Funcionalidades implementadas

- Landing page responsive
- Navegación dinámica con React Router
- Tarjetas reutilizables de servicios
- Carrusel de testimonios accesible
- Formulario de contacto con validación cliente y servidor
- Consumo de API REST con Axios
- Preguntas frecuentes dinámicas
- Gestión de estado mediante hooks personalizados
- Optimización de imágenes y rendimiento
- Diseño centrado en accesibilidad y usabilidad

---

Arquitectura 

El proyecto fue desarrollado utilizando una arquitectura basada en componentes reutilizables con React.

Se implementó separación de responsabilidades mediante:

Components → Componentes reutilizables
Pages → Vistas principales
Hooks → Lógica reutilizable
Services → Comunicación con backend
Data → Simulación de contenido dinámico

Esto permitió mantener un código modular, escalable y fácil de mantener.

## Instalación y uso

### Requisitos previos
- Node.js 18+
- Backend Laravel corriendo en `http://localhost:8000`

### 1. Clonar el repositorio
```bash
git clone https://github.com/bsbraniff/proviemplea_eva3
cd ProviEmplea
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Levantar el backend (en otra terminal)
```bash
cd Backend
docker-compose up
```

### 4. Levantar el frontend
```bash
npm run dev
```

### 5. Abrir en el navegador

http://localhost:5173/


---

## Guía de componentes

### ServiceCard
Tarjeta reutilizable que muestra un servicio. Al hacer clic en "Contáctanos" navega al formulario con el servicio prellenado.

**Props:**
| Prop | Tipo | Descripción |
|------|------|-------------|
| titulo | string | Nombre del servicio |
| descripcion | string | Descripción breve |
| imagen | string | URL de la imagen |

**Ejemplo de uso:**
```jsx
<ServiceCard
  titulo="Asesoría Empresarial"
  descripcion="Orientación personalizada para tu negocio."
  imagen="https://ejemplo.com/imagen.jpg"
/>
```

### Testimonios
Carrusel accesible con navegación por botones e indicadores. Soporta teclado y lectores de pantalla.

**Ejemplo de uso:**
```jsx
<Testimonios />
```

### useClientes (hook)
Hook reutilizable para consumir el backend Laravel.

**Ejemplo de uso:**
```jsx
const { crearCliente, loading, error, success } = useClientes()

await crearCliente({
  nombre: 'Elizabeth',
  apellido: 'Pizarro',
  correo: 'Elizabeth@test.com',
  telefono: '+56912345678'
})
```

---

##  API — Endpoints del backend

Base URL: `http://localhost:8000/api`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/clientes` | Lista todos los contactos |
| POST | `/clientes` | Crea un nuevo contacto |
| GET | `/clientes/{id}` | Ver un contacto |
| PUT | `/clientes/{id}` | Actualizar contacto |
| DELETE | `/clientes/{id}` | Eliminar contacto |

---

## Accesibilidad
- Atributos `aria-label`, `aria-live`, `aria-required` en todos los componentes interactivos
- Navegación por teclado funcional
- Contraste de colores según WCAG 2.1
- Imágenes con `alt` descriptivo
- Formularios con `label` asociado a cada campo

## Optimizaciones aplicadas
- `loading="lazy"` en todas las imágenes
- Proxy Vite para evitar CORS
- Componentes reutilizables para evitar duplicación de código
- Validación cliente antes de llamar al backend (evita requests innecesarios)

---

## Seguridad implementada

- Validación del lado cliente utilizando JavaScript
- Validación del lado servidor mediante Laravel
- Sanitización de datos enviados al backend
- Manejo de errores HTTP
- Protección contra envío de formularios inválidos
- Uso de proxy Vite para evitar problemas CORS



## Validaciones Implementadas

El formulario de contacto incluye validaciones tanto en frontend como backend.

Validaciones realizadas:

Campos obligatorios
Validación de correo electrónico
Validación de largo mínimo
Validación de teléfono
Prevención de envío vacío
Manejo de errores HTTP


## Consumo de API

La aplicación se conecta a un backend Laravel mediante Axios.

Se implementaron operaciones:

GET
POST
PUT
DELETE

La comunicación se realiza mediante API REST utilizando formato JSON.

## Gestión de ramas — Git Flow

| Rama | Propósito |
|------|-----------|
| `master` | Rama principal — código estable y revisado |
| `feature/componente-service-card` | Tarjeta reutilizable con navegación al formulario |
| `feature/carrusel-testimonios` | Carrusel accesible con aria-live y navegación por teclado |
| `feature/formulario-contacto` | Formulario con validación cliente/servidor |
| `feature/accesibilidad-wcag` | Labels WCAG 2.1, aria-required, aria-label |
| `feature/optimizacion-imagenes` | loading="lazy" y objectFit en todas las imágenes |
| `fix/honeypot-antibot` | Campo trampa invisible para prevenir bots |


Conclusión

El desarrollo de esta landing page nos permitió aplicar conceptos de desarrollo frontend moderno utilizando React, Vite y Bootstrap.

Además, se implementó consumo de APIs REST, componentes reutilizables, validaciones, manejo de estado y diseño responsive, logrando una aplicación funcional, moderna y escalable.

