import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { Toast } from 'antd-mobile';

import HelloWorld from '@/views/HelloWorld';
import page1 from '@/views/page/page1';

// const BasicRoute = () => (
//   <HashRouter>
//     <Switch>
//       <Route exact path="/" component={HelloWorld}/>
//       <Route path="/page1" component={page1} />
//     </Switch>
//   </HashRouter>
// );

// window.addEventListener('hashchange', () => {
//   // Toast.hide()
// })

// export default BasicRoute;

class BasicRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HelloWorld}/>
            <Route path="/page1" component={page1} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
 
export default BasicRoute;