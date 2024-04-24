import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // 开启严格模式
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
