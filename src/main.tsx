import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from 'antd' //


ReactDOM.createRoot(document.getElementById('root')!).render(
  // 开启严格模式
  <React.StrictMode>
    <ConfigProvider 
    theme={{
      token: {
        colorText: '#FFF'
      }
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
