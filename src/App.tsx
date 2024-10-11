import { Navigation, SelectedMenu } from '@components';
import { FloatButton, Layout } from 'antd';
import { useState } from 'react';
import { NavigationEnum } from '@types';
import { SettingOutlined } from '@ant-design/icons';

function App() {
  const [selectedMenu, setSelectedMenu] = useState<NavigationEnum>(NavigationEnum.Download);

  return (
    <Layout>
      <Navigation setSelectedMenu={setSelectedMenu} />
      <SelectedMenu selectedMenu={selectedMenu} />
      <FloatButton icon={<SettingOutlined />} />
      //TODO: Add React-Router
    </Layout>
  );
}

export default App;
