import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS & PAGES IMPORT
import './App.css';
import Products from "./views/Products";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./views/ProductDetails";
import ListAllProducts from "./views/ListAllProducts";
import Cart from "./components/cart/catrt";
import About from "./views/about";
import Privacy from "./views/privacy";
import FAQs from "./views/faqs";
import Home from "./views/Home";
import Contact from "./views/Contact";
import NotFound from "./components/notFound/NotFound";
import EventDetails from "./views/EventDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/flowers" exact component={props => <ListAllProducts {...props} />} />
        <Route path="/teddies" exact component={props => <ListAllProducts {...props} />} />
        <Route path="/cakes" exact component={props => <ListAllProducts {...props} />} />
        <Route path="/chocolates" exact component={props => <ListAllProducts {...props} />} />
        <Route path="/flowers/*" exact component={ProductDetail} />
        <Route path="/teddies/*" exact component={ProductDetail} />
        <Route path="/cakes/*" exact component={ProductDetail} />
        <Route path="/chocolates/*" exact component={ProductDetail} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/about" exact component={About} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/faq" exact component={FAQs} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/notfound" exact component={NotFound} />
        <Route path="/event" exact component={EventDetails} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
