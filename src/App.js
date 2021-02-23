import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./views/Products";
import CartEmpty from "./views/CartEmpty";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/products" exact component={Products} />
        <Route path="/carts" exact component={CartEmpty} />
      </Switch>
    </Router>
  );
};

export default App;
