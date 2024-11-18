import {
    HomeOutlined,
    SnippetsOutlined,
    UserOutlined,
    WechatOutlined,
} from '@ant-design/icons';
import { Avatar, Divider, Dropdown, MenuProps } from 'antd';
import './SideBar.styles.scss';
import { useState } from 'react';
import { handleAddActiveClass, SideBarItems, SideBarMenuItems } from './SideBarService';
import { useNavigate, useLocation } from 'react-router-dom';


function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isActive, setIsActive] = useState(SideBarItems.Home);

    const handleOnActive = (key: typeof isActive) => {
        setIsActive(key);
        navigate(`/${key}`);
    }
    
    return (
        <div className='side-bar'>
            <div className='side-bar-icon'>
                <HomeOutlined
                    onClick={() => handleOnActive(SideBarItems.Home)}
                    className={handleAddActiveClass(isActive, SideBarItems.Home, location.pathname)}
                />

                <WechatOutlined
                    onClick={() => handleOnActive(SideBarItems.Chat)}
                    className={handleAddActiveClass(isActive, SideBarItems.Chat, location.pathname)}
                />

                <SnippetsOutlined
                    onClick={() => handleOnActive(SideBarItems.Task)}
                    className={handleAddActiveClass(isActive, SideBarItems.Task, location.pathname)}
                />

                <Divider />
            </div>

            <Dropdown
                menu={{ SideBarMenuItems } as MenuProps}
                trigger={['click']}
                placement="topLeft"
            >
                <div>
                    <Avatar size="large" icon={<UserOutlined />} />
                </div>
            </Dropdown>
        </div>
    );
}

export default SideBar;
