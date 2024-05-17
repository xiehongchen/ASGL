
import { Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
import { flatRoutes } from '@/utils/utils'
import routes from '@/router'
import { useState, useEffect } from 'react';
const routesData = flatRoutes(routes).filter(item => item.path !== '/').map(item => {
  return {
    key: item.path,
    label: item.title
  }
})
const { Header } = Layout;

const LayoutHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const onClick = (values: any) => {
    navigate(values.key)
  }
  const [key] = useState<string>(location.pathname)
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[key]}
        items={routesData}
        onClick={onClick}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default LayoutHeader