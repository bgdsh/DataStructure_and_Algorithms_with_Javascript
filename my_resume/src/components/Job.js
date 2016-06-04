import React from 'react'
import { Row, Col } from 'antd';
export default class Job extends React.Component {
  render(){
    return (
      <div className="pageHolder job">
      <h2>求职意向</h2>
      <Row type="flex" justify="center" gutter={16} className="contentHolder">
        <Col span={9}>
        <p>全栈工程师</p>
        <p>最好是Javascript技术栈</p>
        <p>B轮及以上互联网公司</p>
        <p>薪酬面议</p>
        </Col>
      </Row>
      </div>
    );
  }
}
