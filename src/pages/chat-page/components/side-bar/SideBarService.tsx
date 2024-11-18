import { MenuProps } from "antd";
import {
    SmileOutlined,
} from '@ant-design/icons';

export enum SideBarItems {
    Home = '',
    Chat = 'chat',
    Task = 'task',
}

export enum SideBarClass {
    Active = 'active',
}

export const handleAddActiveClass = (isActive: string, key: string, pathname: string) => {    
    return key === isActive ? SideBarClass.Active : '';
}

export const SideBarMenuItems: MenuProps['items'] = [
    {
        key: '1',
        label: 'Status',
    },
    {
        key: '2',
        label: 'Profile',
        icon: <SmileOutlined />,
    },
    {
        key: '3',
        label: "Logout",
    },
];