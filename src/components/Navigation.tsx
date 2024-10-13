import { FileUnknownFilled, SoundFilled, YoutubeFilled } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { MenuItemType } from 'antd/es/menu/interface';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { NavigationEnum } from '../types/NavigationEnum';
import { useNavigate } from 'react-router-dom';

type OnSelectEventHandler = MenuProps['onSelect'];

type propsType = {
  setSelectedMenu: Dispatch<SetStateAction<NavigationEnum>>;
};

const menu: MenuItemType[] = [
  {
    key: NavigationEnum.Download,
    icon: <YoutubeFilled />,
    label: 'Download',
  },
  {
    key: NavigationEnum.Loudnorm,
    icon: <SoundFilled />,
    label: 'Loudnorm',
  },
  {
    key: NavigationEnum.Metadata,
    icon: <FileUnknownFilled />,
    label: 'Metadata',
    disabled: true,
  },
];

export const Navigation: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleSelection: OnSelectEventHandler = e => {
    navigate(`/${e.key}`);
  };

  return (
    <Sider collapsed={collapsed}>
      <Menu
        defaultSelectedKeys={[NavigationEnum.Download]}
        mode='inline'
        theme='dark'
        items={menu}
        onSelect={handleSelection}
      />
    </Sider>
  );
};
