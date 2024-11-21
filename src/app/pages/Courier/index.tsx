import { CourierStyle } from "./Courier.style";
import PageTitle from "../../components/PageTitle";
import FullFeaturedCrudGrid from "./components/DataGrid";

const Courier = () => {
  return (
    <CourierStyle>
      <div className="couriers-container">
        <PageTitle title="Courier" />
        <FullFeaturedCrudGrid />
      </div>
    </CourierStyle>
  );
};

export default Courier;
