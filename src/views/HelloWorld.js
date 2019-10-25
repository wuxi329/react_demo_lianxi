import React, { Component } from 'react';
import { observer } from "mobx-react";
import '@/assets/css/HelloWorld.less';
import { Button } from 'antd-mobile';

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
      <h2 className="title">Old React.Component
      <Button>121212</Button></h2>
    )
  }
}

export default HelloWorld
