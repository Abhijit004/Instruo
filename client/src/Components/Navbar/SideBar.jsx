import React, { useState } from 'react';
import { Drawer, Menu, ConfigProvider, theme, Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
// import ProfileDropdown from "./ProfileDropdown";
import Icon, {
  ToolOutlined,
  CalendarOutlined,
  DollarOutlined,
  TeamOutlined,
  MenuOutlined,
  HomeOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { DownloadOurApp } from '../../App';
const { Header } = Layout;

const DrawerSidebar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const selectedKey = location.pathname;

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontSize: 16,
          borderRadius: 5,
        },
      }}
    >
      <Layout>
        <Header
          className="instruo-sidebar"
          style={{
            position: 'fixed',
            zIndex: 1000,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.68)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Icon
            className="menu-open-button"
            component={MenuOutlined}
            onClick={showDrawer}
            style={{
              position: 'fixed',
              zIndex: 1000,
            }}
          />
          <Link to="/">
            <div
              className=""
              style={{
                float: 'left',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px',
                marginRight: '1rem',
              }}
            >
              Instruo 2k25
            </div>
          </Link>
          {/* <ProfileDropdown /> */}
        </Header>
      </Layout>
      <Drawer
        title="Instruo 2k25"
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={visible}
        bodyStyle={{ padding: 0 }}
        width={'100vw'}
      >
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{
            height: '100%',
            // The gradient comes first to appear on top of the image
            background: `linear-gradient(180deg, #0e0e1c, #0e0e1c00), url("/assets/Navbar/sidebar.png")`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="instruo-sidebar"
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/" onClick={closeDrawer}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/events" icon={<CalendarOutlined />}>
            <Link to="/events" onClick={closeDrawer}>
              Events
            </Link>
          </Menu.Item>
          <Menu.Item key="/merchandise" icon={<ShopOutlined />}>
            <Link to="/merchandise" onClick={closeDrawer}>
              Merchandise
            </Link>
          </Menu.Item>
          <Menu.Item key="/sponsor" icon={<DollarOutlined />}>
            <Link to="/sponsors" onClick={closeDrawer}>
              Sponsors
            </Link>
          </Menu.Item>
          <Menu.Item key="/team" icon={<TeamOutlined />}>
            <Link to="/team" onClick={closeDrawer}>
              Our Team
            </Link>
          </Menu.Item>
          <div
            style={{
              color: 'white',
              whiteSpace: 'normal',
              lineHeight: 1.2,
              wordWrap: 'break-word',
              fontSize: "1.2rem",
              padding: "2rem",
            }}
          >
            Download the official Instruo app to register for events, view
            schedules, locate venues and much more!
          <button onClick={()=>window.open(DownloadOurApp, "_blank")} className="apk"><img src="/assets/github-icon.svg" />Download the app</button>
          </div>
        </Menu>
      </Drawer>
    </ConfigProvider>
  );
};

export default DrawerSidebar;
