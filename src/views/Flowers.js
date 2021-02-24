import AllFlowers from "../components/Flowers/Flowers";
import Notification from "../components/Notification/Notification";
import Path from "../components/path/Path";
import Filter from "../components/filters/Filter";

const Flowers = () => {
  return (
    <div>
      <Path
        normal="Home&#8195;/&#8195;Flowers&#8195;/&#8195;"
        highlight="Flower Bouquet"
      />
      <Filter />
      <Notification />
      <AllFlowers />
    </div>
  );
};

export default Flowers;
