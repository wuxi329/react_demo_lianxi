import React, { Component } from 'react';
import { observer } from "mobx-react";
import { Toast } from 'antd-mobile';
import Header from '@/components/header'

@observer
class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.console()
  }
  console () {
    Toast.info('This is a toast tips')
  }
  backFn() {
    this.props.history.goBack()
  }
  render() { 
    return (
      <div>
        <Header title="page1" backFn={()=>{this.backFn()}} />
        this is page1
      </div>
    );
  }
}
 
export default Page1;