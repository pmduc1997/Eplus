import React, { Component } from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Họ tên',
        dataIndex: 'name',
        sorter: true,
        width: '20%',
    },
    {
        title: 'Tuổi',
        dataIndex: 'age',
        width: '20%',
    },
    {
        title: 'Tên TK',
        dataIndex: 'username',
        width: '20%',
    },
    {
        title: 'Mật khẩu',
        dataIndex: 'password',
        width: '20%',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '4',
                    name: 'Jim Red',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '5',
                    name: 'Jim Red',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '6',
                    name: 'Jim Red',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '7',
                    name: 'Jim Red',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '8',
                    name: 'Jim Red',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '9',
                    name: 'Jim Red',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '10',
                    name: 'Jim Red',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
                {
                    key: '11',
                    name: 'Jim Red',
                    age: 32,
                    username: 'pmdu',
                    password: '1',
                    email: 'godofciv6@gmail.com',
                },
            ],
            pagination: {},
            loading: false,
        }
    }
    render() {
        return (
            <Table
                columns={columns}
                rowKey={record => record.key}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
            />
        );
    }
}
