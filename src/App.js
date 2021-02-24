import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./views/Products";
import CartEmpty from "./views/CartEmpty";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';
import NotFound from "./components/notFound/NotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/products" exact component={Products} />
        <Route path="/carts" exact component={CartEmpty} />
        <Route path="/notfound" exact component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
