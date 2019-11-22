import React, { Component } from 'react';
import { Row, Col, Divider, Icon } from 'antd'
import styles from './styles'
import { Line } from 'react-chartjs-2'
import { options } from './constants'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCard: [
                {
                    key: '1',
                    cardInfo: 'PROFIT',
                    cardIcon: 'line-chart',
                    cardIconColor: 'blue',
                    cardMore: '35%'
                },
                {
                    key: '2',
                    cardInfo: 'NEW USERS',
                    cardIcon: 'usergroup-add',
                    cardIconColor: 'green',
                    cardMore: '42%'
                },
                {
                    key: '3',
                    cardInfo: 'SALES',
                    cardIcon: 'shopping-cart',
                    cardIconColor: 'orange',
                    cardMore: '25K'
                },
                {
                    key: '4',
                    cardInfo: 'GROWTH',
                    cardIcon: 'rocket',
                    cardIconColor: 'yellow',
                    cardMore: '55%'
                },
            ],
            dataChart: {
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
                datasets: [
                    {
                        label: 'Người dùng',
                        data: [
                            12,
                            15,
                            11,
                            3
                        ],
                        lineTension: 0,
                        fill: false,
                        borderColor: '#64b5f6',
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div>
                <div style={styles.lineChart}>
                    <Line data={this.state.dataChart}
                        options={options}
                        height='2px'
                        width='10px'
                    />
                </div>

                <Row gutter={[32, 32]}>
                    {this.state.dataCard.map((item, key) =>
                        <Col xs={24} xl={6}>
                            <div style={styles.contentBox}>
                                <div style={styles.cardTop}>
                                    <Icon type={item.cardIcon} style={{ fontSize: '50px', color: item.cardIconColor }} />
                                </div>
                                <Divider style={styles.divider}>
                                    <span style={styles.cardInfo}>
                                        {item.cardInfo}
                                    </span>
                                </Divider>
                                <div style={styles.cardBottom}>
                                    <span style={{ fontSize: '40px', }}>
                                        {item.cardMore}
                                    </span>
                                </div>
                            </div>
                        </Col>
                    )}
                </Row>
            </div>
        );

    }
}
