import React from "react";
import ReactDOM from "react-dom";
import BaseLayout from './components/layout/BaseLayout'
import Sample1 from './components/Sample1'
import Sample2 from './components/Sample2'
import App2 from './App2'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import App from "./App";



const About = () => <h1>About us</h1>
const ContactUs = () => <h1>Contact Us</h1>

const Blog = (props) => {

  return (
    <>
      <h1>Blogs</h1>

      {props.match.params.blogID}
      <br></br>
      {props.location.pathname}
    </>
  )
}

const Comment = () => <h1>Comments</h1>
const NoMatch = () => <h1>Error: This route doesn't exist</h1>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/blog/:blogID" component={Blog} />
          <Redirect from="/blog"  to="/" />
          <Route path="/blog" component={Blog} />
          <Route path="/comment" component={Comment} />
          <Route path="/sample1" component={Sample1} />
          <Route path="/sample2/:id" component={Sample2} />
          <Route path="/sample2" component={Sample2} />
          <Route path="/app2" component={App2} />
          
          <Route component={NoMatch} />
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
