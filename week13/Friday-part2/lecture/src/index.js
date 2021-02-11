import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Forms from './components/Forms';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const NoMatch = () => <div>Error: Could Not Find Route</div>

ReactDOM.render(
  <React.StrictMode>
   <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/forms' component={Forms}/>
          <Route component={NoMatch}/>
        </Switch>
      </BaseLayout>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

