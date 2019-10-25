import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from '@/views/HelloWorld';

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HelloWorld}/>
    </Switch>
  </HashRouter>
);

export default BasicRoute;