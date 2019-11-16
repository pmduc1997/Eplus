import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon, Badge, Dropdown, Popover } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import styles from './styles'

const user = {
    name: 'MacLioDe',
    avatar: 'https://i.imacdn.com/vg/2018/07/01/a5b8af9b3c3060a2_16b056a36a661131_2914515303819111118684.jpg'
}
const menu = (
    <Menu>
        <Menu.Item style={styles.menuItem}>
            <Icon type="info-circle" style={{ marginRight: '5px' }} />
            Thông tin cá nhân
      </Menu.Item>
        <Menu.Item style={styles.menuItem}>
            <Icon type="setting" style={{ marginRight: '5px' }} />
            Cài đặt
      </Menu.Item>
        <Menu.Divider />
        <Menu.Item style={styles.menuItem}>
            <Icon type="logout" style={{ marginRight: '5px' }} />
            Đăng xuất
      </Menu.Item>
    </Menu>
);
const text = (
    <h4>Thông báo</h4>
);
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
export default class CustomHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false
        }
    }
    render() {
        return (
            <Header style={styles.header}>
                <div>
                    <Icon
                        style={styles.siderIcon}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </div>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', }}>
                    <div style={{ marginRight: '25px' }}>
                        <Popover placement="bottomRight" title={text} content={content} trigger="click">
                            <Badge count={5}>
                                <Icon type="bell" theme="outlined" style={{ color: 'white', fontSize: '20px' }} />
                            </Badge>
                        </Popover>
                    </div>
                    <Dropdown overlay={menu} trigger={'click'}>
                        <div style={styles.menuItem}>
                            <img src={user.avatar} alt="Avatar" class="avatar" style={styles.avatar} />
                            <span style={{ color: 'white', fontSize: '16px' }}>{user.name}</span>
                        </div>
                    </Dropdown>

                </div>
            </Header>
        )
    }
}
