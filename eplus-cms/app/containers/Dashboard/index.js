import React, { Component } from 'react';
import { Row, Col } from 'antd'
import styles from './styles'
export default class Dashboard extends Component {
    render() {
        return (
            <div style={{ height: '500px' }}>
                <Row gutter={[32, 32]}>
                    <Col style={styles.reportCard} xs={24} xl={6}>Col</Col>
                    <Col style={styles.reportCard} xs={24} xl={6}>Col</Col>
                    <Col style={styles.reportCard} xs={24} xl={6}>Col</Col>
                    <Col style={styles.reportCard} xs={24} xl={6}>Col</Col>
                </Row>
            </div>
        );

    }
}
