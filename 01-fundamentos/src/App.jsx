import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Moderno 2026 — Módulo 01</h1>
      <p>Bienvenido al curso. Este es tu primer componente funcional con React 19.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
      </div>
      <p className="read-the-docs">
        Edita <code>src/App.jsx</code> y guarda para ver el HMR en acción.
      </p>
    </>
  )
}

export default App
