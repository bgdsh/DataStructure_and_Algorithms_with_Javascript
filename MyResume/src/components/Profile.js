import React from 'react'
import { Row, Col, Icon } from 'antd';
let headImage=require('../images/head-512.png')
let ercodeImage=require('../images/ercode.jpg')

export default class Profile extends React.Component{
    render(){
        return (
            <div className="pageHolder profile">
                <h2>个人简介</h2>
                <Row type="flex" justify="center" gutter={16} className="contentHolder">
                    <Col span={14}>
                        <p>
                        我叫白国栋（下面的就是我）,1990年底出生，来自山东济宁，
                        2013年本科毕业于山东建筑大学给水排水工程专业。以后会一直在上海。
                        </p>
                        <p>
                        如果你要找我，可以打电话：18516519290
                        或者给我写信 bgd_sh#hotmail.com (<Icon type="github" />#换成@)
                        或者扫右面的二维码加我微信。
                        </p>
                    </Col>
                    <Col span={4} className="right"><img src={ercodeImage} alt="微信二维码" className="head" /></Col>
                </Row>
                <Row  type="flex" justify="center" gutter={16} className="contentHolder">
                    <Col span={4}><img src={headImage} alt="我的照片" className="head" /></Col>
                    <Col span={14}>
                    我主要写Javascript,正努力朝着真正的全栈工程师迈进。
                    主攻方向为后端开发，兼顾前端功能性开发，专注Node.js生态圈一年有余。
                    <i>
                    powered by『<a href="http://ant.design/">antd</a>』。
                    简历源码在<a href="https://github.com/bgdsh/playground/tree/master/my_resume">这里</a>。
                    </i>
                    </Col>
                </Row>
            </div>
        );

    }
}
