import { Layout } from 'antd'
import LayoutContent from './LayoutContent'
import LayoutHeader from './LayoutHeader'
const layout = () => {
  return (
    <Layout>
      <LayoutHeader />
      <LayoutContent />
    </Layout>
  )
}

export default layout