import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Products from "./views/Products";
import CartEmpty from "./views/CartEmpty";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./views/ProductDetails"
import Flowers from "./views/Flowers"

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <h1>Hello</h1>
        </Route>
        <Route path="/products" exact component={Products} />
        <Route path="/carts" exact component={CartEmpty} />
        <Route path="/flowers/*" exact component={ProductDetail} />
        <Route path="/flowers" exact component={Flowers} /> 
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
