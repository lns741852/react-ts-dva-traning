import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { menus } from './layout.config';
import { Route } from 'dva/router';
import ActivityManage from '../pages/activityManage/activityManage';
import BannerMangage from '../pages/bannerManage/bannerMangage';
import { useHistory } from 'dva'
import {MenuInfo} from 'rc-menu/lib/interface'
import ModalAndFormPage from '../pages/modalAndForm/ModalAndFormPage';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  const linkPage = ({key}: MenuInfo) => {
    history.push(key)
  }

  const logout =()=>{
    history.push('/login')
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{
          height: '32px',
          margin: '16px',
          fontSize: '16px',
          fontWeight: 'bolder',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'

        }}>React 練習</div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={linkPage}
          items={menus
          }
        />
      </Sider>
      <Layout >
        <Header style={{ padding: 0}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Button type='link' onClick={logout}>登出</Button>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <Route path="/activityManage">
            <ActivityManage></ActivityManage>
          </Route>
          <Route path="/bannerMangage">
            <BannerMangage></BannerMangage>
          </Route>
          <Route path="/modalAndForm">
            <ModalAndFormPage></ModalAndFormPage>
          </Route>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
