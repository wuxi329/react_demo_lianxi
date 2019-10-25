import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      backFn: props.backFn,
      leftIcon: props.leftIcon ? false : true
    }
  }
  // 左侧点击
  LeftClick () {
    if(!this.state.leftIcon) return
    if (this.state.backFn) {
      console.log('有left回调函数')
      this.props.backFn()
    } else {
      this.props.history.goBack()
    }
    console.log('onLeftClick')
  }
  render() { 
    return (
      <div className="padbot45">
        <NavBar
          className="nav_fixed"
          mode="light"
          icon={this.state.leftIcon ? <Icon type="left" /> : ''}
          onLeftClick={() => this.LeftClick()}
        >{this.state.title}</NavBar>
      </div>
    );
  }
}
 
export default Header;