# Módulo 01 — Fundamentos: Setup con Vite + React 19

## Objetivo

Crear el primer proyecto moderno con Vite y React 19.3, entender la estructura básica y renderizar el primer componente.

## Requisitos

- Node.js 20.19+ (recomendado 22+)
- npm (o pnpm / bun)

## Cómo empezar

### Opción recomendada (desde cero)

```bash
npm create vite@latest mi-app-react -- --template react
cd mi-app-react
npm install
npm run dev
```

### Usando los archivos de este módulo

1. Copia la carpeta `01-fundamentos` o clona el repo.
2. Entra en la carpeta del proyecto (cuando añadamos los archivos base).
3. Ejecuta:

```bash
npm install
npm run dev
```

## Estructura típica de un proyecto Vite + React

```
mi-app/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

## Punto de entrada

- `index.html` → carga `src/main.jsx`
- `main.jsx` → monta el componente `<App />` en el DOM
- `App.jsx` → tu primer componente

## Próximos pasos en este módulo

1. Crear el proyecto.
2. Modificar `App.jsx` para mostrar un mensaje personalizado.
3. Entender cómo funciona el Hot Module Replacement (HMR).
4. Añadir un segundo componente simple.

¡Empieza y avisa cuando tengas el servidor corriendo!
