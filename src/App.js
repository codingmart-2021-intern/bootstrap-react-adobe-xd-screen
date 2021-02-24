import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// COMPONENTS & PAGES IMPORT
import './App.css';
import Products from "./views/Products";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./views/ProductDetails"
import Flowers from "./views/Flowers"
import Cart from "./components/cart/catrt";
import About from "./views/about";
import Privacy from "./views/privacy";
import home from "./views/Home";
import FAQs from "./views/faqs";




const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/products" exact component={Products} />
        <Route path="/flowers" exact component={Flowers} />
        <Route path="/flowers/*" exact component={ProductDetail} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/about" exact  component={About} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/faq" exact component={FAQs} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
