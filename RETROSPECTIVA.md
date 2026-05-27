# Retrospectiva del Equipo — Sprint Final

**Fecha:** Mayo 2026  
**Equipo:** [Impulso digital]  
**Integrantes:** [Bárbara Santa María], [ELizabeth Pizarro Lara]

---

## ¿Qué salió bien?
- Logramos integrar el frontend React con el backend Laravel sin problemas 
  de CORS usando el proxy de Vite
- La separación en hooks y servicios facilitó el trabajo en paralelo 
  entre los integrantes
- Bootstrap permitió construir una interfaz responsiva rápidamente
- El uso de Git con ramas por funcionalidad evitó conflictos de código
- La instalación y configuración de React Router DOM permitió manejar 
  múltiples páginas de forma ordenada
- Axios simplificó las llamadas HTTP al backend comparado con fetch nativo
- El hook useClientes centralizó toda la lógica de comunicación con la API,
  evitando repetir código en cada componente

## ¿Qué se puede mejorar?
- Al inicio no teníamos claro cómo conectar el frontend con el backend — 
  fue necesario investigar el concepto de proxy en Vite para resolver 
  los errores de CORS
- No sabíamos si el backend debía estar en la misma carpeta que el frontend,
  lo que generó confusión inicial — aprendimos que son proyectos 
  completamente independientes que corren en puertos distintos
- El concepto de hooks personalizados no estaba claro al inicio — 
  fue necesario entender para qué sirven y cómo se diferencian 
  de un servicio normal
- Faltó planificar la estructura de carpetas desde el principio, 
  lo que generó dudas sobre dónde ubicar main.jsx y App.jsx


## Plan de acción para la próxima iteración
| Mejora | Responsable | Plazo |
|--------|------------|-------|
| Configurar el entorno completo (proxy, Docker, rutas) antes de codear | Ambos | Día 1 del sprint |
| Definir la estructura de carpetas en equipo antes de crear archivos | Ambos | Día 1 del sprint |
| Agregar tests unitarios con Vitest para los hooks | Integrante 1 | Sprint 1 |
| Implementar autenticación con tokens en el backend | Integrante 2 | Sprint 1 |
| Mejorar diseño visual con paleta de colores oficial de SERCOTEC | Integrante 1 | Sprint 2 |
| Agregar más endpoints al backend (servicios, FAQ) para no depender de datos locales | Integrante 2 | Sprint 2 |
| Documentar cada componente con comentarios desde que se crea | Ambos | Próximo sprint |

## Lecciones aprendidas

### Sobre el entorno de desarrollo
- El frontend (React/Vite en puerto 5173) y el backend (Laravel en puerto 8000) 
  son proyectos **separados** que corren en terminales distintas simultáneamente
- Sin configurar el proxy en vite.config.js, el navegador bloquea las 
  peticiones entre puertos distintos por política CORS
- Docker debe estar corriendo antes de levantar el frontend, 
  de lo contrario las llamadas a la API fallan

### Sobre React
- Un **hook personalizado** (useClientes) encapsula lógica reutilizable 
  con estado — evita repetir loading, error y success en cada componente
- Un **servicio** (clientes.service.js) centraliza las llamadas HTTP — 
  si cambia la URL del backend, solo se modifica en un lugar
- **BrowserRouter** debe envolver toda la app en main.jsx para que 
  useNavigate y Link funcionen en cualquier componente
- El **state de React Router** (navigate('/contacto', { state: { servicio } })) 
  permite pasar datos entre páginas sin usar variables globales
- **main.jsx** y **App.jsx** siempre van directamente en src/, 
  no dentro de subcarpetas

### Sobre buenas prácticas
- Las imágenes con loading="lazy" mejoran el rendimiento sin 
  esfuerzo adicional
- Los atributos aria-label, aria-required y aria-live son esenciales 
  para accesibilidad y deben agregarse desde el inicio, no al final
- Usar key={item.id} en lugar de key={index} en listas 
  evita bugs de renderizado en React

## Métricas del sprint
- Componentes desarrollados: 9 (Navbar, Hero, Nosotros, ServiceCard, 
  Service, Testimonios, FAQ, Footer, Layout)
- Páginas creadas: 2 (Home, Contacto)
- Hooks desarrollados: 1 (useClientes)
- Servicios creados: 1 (clientes.service.js)
- Endpoints consumidos: 2 (GET /api/clientes, POST /api/clientes)
- Librerías instaladas durante el sprint: 3 (react-router-dom, axios, bootstrap)
- Archivos de documentación: 3 (README.md, BUENAS_PRACTICAS.md, RETROSPECTIVA.md)


## Reflexión final del equipo
Este proyecto nos permitió entender cómo funciona una aplicación 
web completa con frontend y backend separados. El mayor aprendizaje 
fue comprender que React no es solo HTML con JavaScript — es un sistema 
de componentes, estados y efectos que requiere organización desde el inicio. 
La integración con Laravel nos mostró la importancia de configurar 
correctamente el entorno antes de empezar a desarrollar.