import ProductList from "../components/ProductList/ProductList";
import Notification from "../components/Notification/Notification";
import Path from "../components/path/Path";
import Filter from "../components/filters/Filter";
import { useLocation } from "react-router-dom";
const ListAllProducts = () => {
  const category = useLocation().pathname.split("/")[1] 
  return (
    <div>
      <Path
        category={category}
      />
      <Filter />
      <ProductList />
    </div>
  );
};

export default ListAllProducts;
