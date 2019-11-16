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
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    breakpoint="lg"
                    collapsed={this.state.collapsed}
                    onBreakpoint={broken => {
                        this.setState({
                            collapsed: broken
                        })
                    }}
                    width={250}
                    style={{ background: '#fff' }}>
                    <div style={styles.logo}>
                        <img src="http://evolutionldn.com/wp-content/uploads/2018/04/E-Logo-white-on-transparent.png" style={styles.logoImg} />
                        {!this.state.collapsed ? <span style={styles.logoName}>Plus</span> : <div />}
                    </div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">
                            <Link to="/">
                                <div style={styles.menuItem}>
                                    <Icon type="dashboard" />
                                    <span>Dashboard</span>
                                </div>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/users">
                                <div style={styles.menuItem}>
                                    <Icon type="user" />
                                    <span>Người dùng</span>
                                </div>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ height: '100%' }}>

                    <CustomHeader />
                    <Content
                        style={{
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
        )
    }
}
