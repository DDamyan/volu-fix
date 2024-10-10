import { Download, Loudnorm } from '@components';
import { NavigationEnum } from '@types';
import { Content } from 'antd/es/layout/layout';
import { FC } from 'react';

type propsType = {
  selectedMenu: NavigationEnum;
};

const Menus = {
  [NavigationEnum.Download]: <Download />,
  [NavigationEnum.Loudnorm]: <Loudnorm />,
  [NavigationEnum.Metadata]: <div>Not Found</div>,
};

export const SelectedMenu: FC<propsType> = props => {
  return <Content>{Menus[props.selectedMenu]}</Content>;
};
