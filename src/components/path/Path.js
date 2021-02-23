import './App.css';

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

import Footer from '../Footer/Footer'

const App = () => (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
      </Switch>
    <Footer />
  </Router>
)

export default App;
