import { List } from 'antd';
import './index.scss'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const FileList = () => (
  <List
    className="list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        {item.title}
      </List.Item>
    )}
  />
);

export default FileList;