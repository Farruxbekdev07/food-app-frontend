import { CourierStyle } from "./Courier.style";
import FullFeaturedCrudGrid from "./components/DataGrid";

const Courier = () => {
  return (
    <CourierStyle>
      <div className="couriers-container">
        <FullFeaturedCrudGrid />
      </div>
    </CourierStyle>
  );
};

export default Courier;
