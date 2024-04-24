
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom'
import { flatRoutes } from '@/utils/utils'
import routes from '@/router'
const routesData = flatRoutes(routes).filter(item => item.path !== '/').map(item => {
  return {
    key: item.path,
    label: item.title
  }
})
const { Header } = Layout;

const LayoutHeader = () => {
  const navigate = useNavigate()
  const onClick = (values: any) => {
    navigate(values.key)
  }
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
        defaultSelectedKeys={['/home']}
        items={routesData}
        onClick={onClick}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default LayoutHeader