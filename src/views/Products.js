import Filter from "../components/filters/Filter";
import Path from "../components/path/Path";

const Products = () => {
    return (
      <div>
        <Path normal="Home&#8195;/&#8195;Flowers&#8195;/&#8195;" highlight="Flower Bouquet" />
        <Filter />
      </div>
    );
  }
  
  export default Products;