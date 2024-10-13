import { Navigation } from '@components';
import { FloatButton, Layout } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Navigation />
      <Outlet />
      <FloatButton icon={<SettingOutlined />} />
    </Layout>
  );
}

export default App;
