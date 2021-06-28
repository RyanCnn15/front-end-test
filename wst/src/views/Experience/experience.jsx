import React from 'react';
import { Divider, Row, Col, Card } from 'antd';

function Experience(props) {
    return (
        <div className="experience">
            <Divider orientation="left">工作经历</Divider>
            <Row gutter={16}>
                {
                    props.data.map((item,index) => {
                        return (
                            <Col span={12} key={index}>
                                <Card title={item.name}>
                                    <p>时间：{item.time}</p>
                                    <p>职责：{item.duty}</p>
                                    <p>项目：{item.object}</p>
                                    <p>介绍：{item.introduce}</p>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Experience