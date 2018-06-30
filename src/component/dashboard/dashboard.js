import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import PcHeader from '../header/PcHeader';
// import PcFooter from '../footer/PcFooter';
import './dashboard.css'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class Dashboard extends React.Component{


    render(){
        return(
            <div>
               <Layout>
                    <PcHeader></PcHeader>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            >
                            <SubMenu key="sub1" title={<span><Icon type="user" />娱乐</span>}>
                                <Menu.Item key="1">八卦</Menu.Item>
                                <Menu.Item key="2">影视</Menu.Item>
                                <Menu.Item key="3">明星</Menu.Item>
                                <Menu.Item key="4">其他</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />体育</span>}>
                                <Menu.Item key="5">足球</Menu.Item>
                                <Menu.Item key="6">篮球</Menu.Item>
                                <Menu.Item key="7">电竞</Menu.Item>
                                <Menu.Item key="8">其他</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />电子科技</span>}>
                                <Menu.Item key="9">汽车</Menu.Item>
                                <Menu.Item key="10">电脑</Menu.Item>
                                <Menu.Item key="11">手机</Menu.Item>
                                <Menu.Item key="12">其他</Menu.Item>
                            </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>主页</Breadcrumb.Item>
                            <Breadcrumb.Item>列表</Breadcrumb.Item>
                            <Breadcrumb.Item>标题</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            Content
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>, mountNode);
             </div>
        )
    }
}

export default Dashboard;