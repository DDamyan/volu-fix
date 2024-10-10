import { Navigation, SelectedMenu } from '@components';
import { Layout } from 'antd';
import { useState } from 'react';
import { NavigationEnum } from '@types';

function App() {
  const [selectedMenu, setSelectedMenu] = useState<NavigationEnum>(NavigationEnum.Download);

  return (
    <Layout>
      <Navigation setSelectedMenu={setSelectedMenu} />
      <SelectedMenu selectedMenu={selectedMenu} />
    </Layout>
  );
}

export default App;
