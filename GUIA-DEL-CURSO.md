# Guía del Curso: React Moderno 2026

Este documento recoge la estructura completa del curso, su evolución y los lugares de consulta recomendados.

## Filosofía y ritmo

El curso es **regulable**:
- **Camino principal**: avance constante, fundamentos sólidos para construir apps reales.
- **Módulos de profundización**: temas actuales de la comunidad. Puedes profundizar, hacer el nivel mínimo o saltarlos según interés y tiempo.

## Camino principal (obligatorio)

| Módulo | Tema principal | Objetivo |
|---------|----------------|----------|
| 01 | Setup + Componentes básicos | Proyecto Vite + React 19 funcionando. Primer componente. |
| 02 | Props, composición y estado local | Componentes reutilizables con `useState`. |
| 03 | Listas, keys y renderizado condicional | UI dinámica. |
| 04 | Efectos (`useEffect`) | Side effects bien controlados. |
| 05 | Formularios modernos (Actions) | `useActionState` y `useFormStatus`. |
| 06 | Routing | React Router. |
| 07 | Estado compartido | Context + separación server/client state. |
| 08 | Proyecto final | Aplicación completa con API. |

## Módulos de profundización (opcionales)

Se irán añadiendo en la carpeta `profundizacion/` a medida que avancemos:

- React 19.3 features (View Transitions, Fragment Refs, `browser()`, Context en RSC)
- React Compiler
- Server Components y boundaries
- TanStack Query + Zustand
- TanStack Start / React Router Framework Mode
- Performance (waterfalls, virtualización, concurrency)
- TypeScript + Zod
- Optimistic updates
- Testing (Vitest + Playwright)
- Accesibilidad y DX
- Arquitectura de carpetas

## Estructura del repositorio

```
/
├── README.md
├── GUIA-DEL-CURSO.md          ← este archivo
├── RECURSOS.md                 ← lugares de consulta
├── 01-fundamentos/
├── 02-estado-y-efectos/
├── 03-formularios-y-routing/
├── 04-proyecto-final/
└── profundizacion/
```

## Evolución del curso

El contenido se irá actualizando según las discusiones de la comunidad (r/reactjs, This Week In React, X, etc.). Los módulos de profundización reflejan lo que se comenta actualmente en 2026.
