import React from 'react';
import { Row, Col, Collapse } from 'antd';
const Panel = Collapse.Panel;
export default class Opinion extends React.Component{
  render(){
    return (
      <div className="pageHolder opinion">
      <h2>我的技术观念</h2>
      <Row type="flex" justify="center" gutter={16} className="contentHolder">
        <Col span={20}>
          <Collapse accordion>
            <Panel header={'关于全栈'} key="1">
            <p>
            在创业型公司，全栈是必要的。实现从0到1，很多东西手头是没有的。
            如果等条件都完备了再做事情，或许会延误了时机。
            </p>
            <p>
            在互联网时代，开发工具越来越好用。围绕着业务逻辑，有大量的工具可供创业公司使用。
            即便是大数据分析、机器学习这种高档货，也如『旧时王谢堂前燕，飞入寻常百姓家。』
            在这种情况下，全栈更多地是一种拥抱新工具的精神。
            </p>
            <p>
            真正热爱技术的人，如果使用某种工具时间久了，自然会有贡献代码让它更好的动力。
            知其然到知其所以然的过程发端于全栈工程师的选择。
            </p>
            </Panel>
            <Panel header={'技术积累'} key="2">
            <p>
            1、打好基础。作为一个非专业出身的程序员，更应该补充CS基础。尤其是算法知识。
            </p>
            <p>
            2、新技术。围绕需求，不怕research新的技术，不怕读英文文档。
            </p>
            <p>
            3、写<a href="http://www.cnblogs.com/BaiGuodong/">博客</a>。已经开始在博客写读书笔记，虽然记录的东西不一定能帮到别人，
            但是用来备查还是很有用的。
            </p>
            </Panel>
            <Panel header={'开源精神'} key="3">
            <p>
            我也挺想为开源界做点贡献的，发现sails.js不错，想翻译其文档，
            但在这个过程中发现meteor.js更好一些，就停下了。
            发现typescript官方文档不错，翻译了一些，发现已经有人做过同样的事情了。
            至今只给一个star 600+的项目贡献了中文翻译版本。
            </p>
            <p>
            这方面有待加强。
            </p>
            </Panel>
            <Panel header={'行业定位'} key="4">
            <p>互联网是一个大行业，可以联通一切。</p>
            <p>要不要做自己大学专业相关的事情困扰了我好多年，离开建筑行业之后终于想明白了。</p>
            </Panel>
          </Collapse>
        </Col>
      </Row>
      </div>
    );
  }
}
