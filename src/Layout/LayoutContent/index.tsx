import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import './index.scss'
const { Content } = Layout

const LayoutContent = () => {
  return (
    <Content className="container">
      <Outlet />
    </Content>
  )
}
export default LayoutContent
