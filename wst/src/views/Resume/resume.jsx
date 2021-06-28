import React from 'react';
import { List,Divider } from 'antd';
import propTypes from 'prop-types';

function Resume(props) {
    return (
        <div className="resume">
            <div className="site-page-header-ghost-wrapper">
                <Divider orientation="left">专业技能</Divider>
                <List
                    bordered
                    dataSource={props.data.skil}
                    renderItem={(item,index) => (
                        <List.Item>
                            {`${index+1}.${item}`}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

Resume.propTypes = {
    data: propTypes.shape({
        id:propTypes.string,
        skil:propTypes.array,
    })
}

export default Resume