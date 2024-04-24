import { Router } from './router/renderRoutes'
import routes from './router'
import { HashRouter } from 'react-router-dom'
import { Suspense, FC } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './app.scss'

const App: FC = () => (
  <Suspense
    fallback={
      <Spin indicator={<LoadingOutlined spin style={{ fontSize: 36 }} />} />
    }
  >
    <HashRouter>
      <Router routes={routes} />
    </HashRouter>
  </Suspense>
)
export default App