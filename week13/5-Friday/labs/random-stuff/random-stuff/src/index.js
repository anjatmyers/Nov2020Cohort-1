import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConditionalRendering from './components/ConditionalRendering'
import Adjustments from './components/styledComponents/Adjustments'
import Animate from './components/styledComponents/Animate'
import As from './components/styledComponents/As'
import Attrs from './components/styledComponents/Attrs'
import Basic from './components/styledComponents/Basic'
import BootstrapButton from './components/styledComponents/BootstrapButton'
import Complex from './components/styledComponents/Complex'
import GlobalStyles from './components/styledComponents/GlobalStyles'
import  PseudoSelectors from './components/styledComponents/PseudoSelectors'
import  Theme from './components/styledComponents/Theme';



import BaseLayout from './components/layout/BaseLayout'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/adjustments' component={Adjustments}/>
          <Route path='/animate' component={Animate}/>
          <Route path='/as' component={As}/>
          <Route path='/attrs' component={Attrs}/>
          <Route path='/basic' component={Basic}/>
          <Route path='/bootstrapbutton' component={BootstrapButton}/>
          <Route path='/complex' component={Complex}/>
          <Route path='/globalstyles' component={GlobalStyles}/>
          <Route path='/pseudo' component={PseudoSelectors}/>
          <Route path='/theme' component={Theme}/>
          <Route path='/condrendering' component={ConditionalRendering}/>
          
        </Switch>
      </BaseLayout>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

