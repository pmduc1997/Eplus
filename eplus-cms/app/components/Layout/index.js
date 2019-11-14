import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import styles from './styles'
import CustomHeader from '../Header'
export default class CustomLayout extends Component {
    render() {
        return (
            <Layout>
                <CustomHeader />
                <Layout>
                    <Sider width={250} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1">
                                <Link to="/">
                                    <div style={styles.menuItem}>
                                        <Icon type="dashboard" />Dashboard
                                    </div>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/users">
                                    <div style={styles.menuItem}>
                                        <Icon type="user" />Người dùng
                                    </div>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ height: '100%', padding: '24px 24px 24px 24px' }}>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                height: '100%',
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
