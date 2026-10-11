# Instalación del entorno — Guía básica

Esta es la parte más básica del curso. Sigue estos pasos antes de empezar cualquier módulo.

## 1. Instalar Node.js

1. Ve a **[https://nodejs.org](https://nodejs.org)**
2. Descarga la versión **LTS** (recomendada).
3. Ejecuta el instalador y sigue los pasos (acepta las opciones por defecto).

### Verificar la instalación

Abre una terminal (CMD, PowerShell, Terminal o Git Bash) y escribe:

```bash
node --version
npm --version
```

Deberías ver números de versión (por ejemplo `v22.14.0` y `10.x.x`).

> Si no funciona, cierra la terminal y ábrela de nuevo. Si sigue sin funcionar, reinicia el ordenador.

## 2. Crear tu primer proyecto React con Vite

```bash
npm create vite@latest mi-app-react -- --template react
cd mi-app-react
npm install
npm run dev
```

Cuando veas algo como:

```
  VITE v8.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

Abre esa URL en el navegador. ¡Ya tienes React corriendo!

## 3. Usar los archivos del repositorio

Si quieres trabajar directamente con la carpeta `01-fundamentos` de este repo:

```bash
git clone https://github.com/Mar2rech/curso-react-moderno-2026.git
cd curso-react-moderno-2026/01-fundamentos
npm install
npm run dev
```

## Problemas frecuentes

| Problema | Solución |
|---------|---------|
| `npm` no se reconoce | Cierra y reabre la terminal o reinicia el PC |
| Versión de Node muy antigua | Desinstala Node e instala la LTS desde nodejs.org |
| Puerto ocupado | Vite usa otro puerto automáticamente |
| Errores de permisos (Linux/Mac) | Evita usar `sudo` con npm. Usa nvm si es necesario |

## Siguiente paso

Una vez que tengas el servidor corriendo y veas la página en el navegador, ve al archivo `01-fundamentos/README.md` para continuar con el módulo.
