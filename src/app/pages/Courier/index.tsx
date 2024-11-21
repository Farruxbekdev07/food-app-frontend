import { CourierStyle } from "./Courier.style";
import PageTitle from "../../components/PageTitle";
import FullFeaturedCrudGrid from "./components/DataGrid";

type courierType = {
  name: string;
  phoneNumber: number;
};
const courierName: courierType[] = [
  {
    name: "Bolta",
    phoneNumber: 4514200503,
  },
  {
    name: "dfbBolta",
    phoneNumber: 4514200503,
  },
  {
    name: "Bolta",
    phoneNumber: 4514200503,
  },
  {
    name: "dffdbBolta",
    phoneNumber: 4514200503,
  },
];

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
