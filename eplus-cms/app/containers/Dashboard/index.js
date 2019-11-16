import React, { Component } from 'react';
import { Row, Col, Divider, Icon } from 'antd'
import styles from './styles'
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataCard: [
                {
                    key: '1',
                    cardInfo: 'PROFIT',
                    cardIcon: 'line-chart',
                    cardIconColor:'blue',
                    cardMore: '35%'
                },
                {
                    key: '2',
                    cardInfo: 'NEW USERS',
                    cardIcon: 'usergroup-add',
                    cardIconColor:'green',
                    cardMore: '42%'
                },
                {
                    key: '3',
                    cardInfo: 'SALES',
                    cardIcon: 'shopping-cart',
                    cardIconColor:'orange',
                    cardMore: '25K'
                },
                {
                    key: '4',
                    cardInfo: 'GROWTH',
                    cardIcon: 'rocket',
                    cardIconColor:'yellow',
                    cardMore: '55%'
                },
            ],
        }
    }
    render() {
        return (
            <div style={{ height: '500px' }}>
                <Row gutter={[32, 32]}>
                    {this.state.dataCard.map((item, key) =>
                        <Col xs={24} xl={6}>
                            <div style={styles.reportCard}>
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
