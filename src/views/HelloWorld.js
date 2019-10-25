import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import Header from '@/components/header'
import '@/assets/css/HelloWorld.less';

@observer
class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() { // 组件挂载前触发

  }
  render() {
    return (
      <div>
        <Header title="目录" leftIcon="false" />
        <div>
          <h5>模块1</h5>
          <Link to="/page1" className="list_item">跳转page1</Link>
        </div>
      </div>
    )
  }
}

export default HelloWorld
