# Módulo 01 — Fundamentos: Setup con Vite + React 19

## Objetivo

Crear el primer proyecto moderno con Vite y React 19.3, entender la estructura básica y renderizar el primer componente.

## Instalación básica (paso a paso)

### 1. Instalar Node.js

Necesitas **Node.js 20.19 o superior** (recomendado 22 LTS).

- Ve a [https://nodejs.org](https://nodejs.org)
- Descarga la versión **LTS** (Long Term Support)
- Instálala (en Windows/Mac se instala con el instalador; en Linux puedes usar nvm o el gestor de paquetes)

**Verifica que se instaló correctamente:**

```bash
node --version
npm --version
```

Deberías ver algo como `v22.x.x` y una versión de npm.

### 2. Crear el proyecto (recomendado)

Abre una terminal y ejecuta:

```bash
npm create vite@latest mi-app-react -- --template react
```

Sigue las instrucciones (acepta las opciones por defecto si no sabes qué elegir).

Luego:

```bash
cd mi-app-react
npm install
npm run dev
```

Abre el navegador en la URL que te indique (normalmente `http://localhost:5173`).

### 3. Alternativa: usar los archivos de este repositorio

Si prefieres usar los archivos que ya están en `01-fundamentos/`:

1. Clona el repositorio o descarga la carpeta `01-fundamentos`.
2. Entra en la carpeta:
   ```bash
   cd 01-fundamentos
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Arranca el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### 4. ¿Qué hacer si algo falla?

- Si `npm` no se reconoce → cierra y vuelve a abrir la terminal (o reinicia el ordenador).
- Si tienes una versión muy antigua de Node → desinstala e instala la LTS desde nodejs.org.
- Si el puerto 5173 está ocupado → Vite te sugerirá otro puerto automáticamente.

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

1. Tener el servidor corriendo (`npm run dev`).
2. Modificar `src/App.jsx` y ver cómo se actualiza solo (HMR).
3. Entender qué hace cada archivo.
4. Añadir un segundo componente simple.

¡Cuando tengas el proyecto abierto en el navegador, avísame y seguimos!
