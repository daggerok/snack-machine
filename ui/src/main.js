/**
 * Created by mak on 7/5/16.
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import { Navbar } from './components/common/Navbar';
import { Home } from './components/Home';
import { Footer } from './components/common/Footer';
import { NotFound } from './components/NotFound';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
