import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link , hashHistory } from 'react-router'
import ParentEx1 from './ex1'
import ParentEx2 from './ex2'
import ParentEx3 from './ex3'
import ParentEx4 from './ex4'
import ParentEx5 from './ex5'

render((
  <Router history={hashHistory}>
    <Route path="/" component={ParentEx1} />
    <Route path="/ex2" component={ParentEx2} />
    <Route path="/ex3" component={ParentEx3} />
    <Route path="/ex4" component={ParentEx4} />
    <Route path="/ex5" component={ParentEx5} />
  </Router>
), document.getElementById('app'))
