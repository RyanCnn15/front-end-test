import React from 'react';
import { Divider, Card } from 'antd';
import propTypes from 'prop-types';

function School(props) {
    return (
        <>
            <Divider orientation="left">教育背景</Divider>
            <Card title={props.data.name} >
                <p>时间：{props.data.time}</p>
                <p>专业：{props.data.subject}</p>
                <p>奖项：{
                    props.data.prize.map((item, index) => {
                        let str = props.data.prize.length - 1 == index ? <span key={index}>{item}</span> : <span key={index}>{item + "、"}</span>
                        return str
                    })
                }</p>
            </Card>
        </>
    )
}
School.propTypes = {
    data: propTypes.shape({
        name: propTypes.string,
        time: propTypes.string,
        subject: propTypes.string,
        prize: propTypes.array,
    })
}
export default School