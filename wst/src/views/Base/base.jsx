import React from 'react';
import { PageHeader, Descriptions } from 'antd';
import propTypes from 'prop-types';

function Base(props) {
    return (
        <div className="base">
            <PageHeader
                ghost={false}
                title={props.data.name}
                subTitle="前端工程师简历"
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="姓名">{props.data.name}</Descriptions.Item>
                    <Descriptions.Item label="年龄">{props.data.age}</Descriptions.Item>
                    <Descriptions.Item label="性别">{props.data.gender}</Descriptions.Item>
                    <Descriptions.Item label="电话">{props.data.phone}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{props.data.email}</Descriptions.Item>
                    <Descriptions.Item label="地址">{props.data.address}</Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    )
}
Base.propTypes = {
    data: propTypes.shape({
        name: propTypes.string,
        gender: (props, propName, componentName) => {
            if (!/^男$|^女&|^未知&/.test(props[propName])) {
                return new Error(propName + "必须输入男、女或者未知")
            }
        },
        age: propTypes.number,
        phone: propTypes.string,
        email: (props, propName, componentName) => {
            if (!/^\w{3,12}@\w{1,5}\.[a-z]{2,3}$/.test(props[propName])) {
                return new Error(propName + "请输入正确邮箱")
            }
        },
        address: propTypes.string,
    }),
}

export default Base