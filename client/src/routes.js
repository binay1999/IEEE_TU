import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/body/home';
import Layout from './components/layout'
const Routes = props => {
  return (
    <Switch>
      <Layout>
      <Route path='/' exact component={Home}/>
      </Layout>
    </Switch>
  )
};

export default Routes;
