import { Navigation } from '@components';
import { FloatButton, Layout } from 'antd';
import { useState } from 'react';
import { NavigationEnum } from '@types';
import { SettingOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

function App() {
  const [selectedMenu, setSelectedMenu] = useState<NavigationEnum>(NavigationEnum.Download);

  return (
    <Layout>
      {/* <SelectedMenu selectedMenu={selectedMenu} /> */}
      <Navigation />
      <Outlet />
      <FloatButton icon={<SettingOutlined />} />
    </Layout>
  );
}

export default App;
