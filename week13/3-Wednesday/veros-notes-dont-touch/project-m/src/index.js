import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/layout/BaseLayout';
import ProjectManagement from './components/pm/ProjectManagement';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/project' component={ProjectManagement}/>
          
        </Switch>
      </BaseLayout>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


