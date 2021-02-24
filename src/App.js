import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// COMPONENTS & PAGES IMPORT
import Products from "./views/Products";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./views/ProductDetails"
import Flowers from "./views/Flowers"
import Cart from "./components/cart/catrt";
import Home from "./components/home/home";
import About from "./views/about";
import Privacy from "./views/privacy";


import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products"  component={Products} />
        <Route path="/flowers"  component={Flowers} />
        <Route path="/flowers/*"  component={ProductDetail} />
        <Route path="/cart"  component={Cart} />
        <Route path="/about"  component={About} />
        <Route path="/privacy"  component={Privacy} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
