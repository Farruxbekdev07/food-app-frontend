import { GridRowsProp } from "@mui/x-data-grid";
import { randomArrayItem, randomTraderName } from "@mui/x-data-grid-generator";

const status = ["Pending", "Cooking", "Delivering", "Received"];

const randomStatus = () => {
  return randomArrayItem(status);
};

const initialRows: GridRowsProp = [
  {
    id: 1,
    phone: 25,
    status: randomStatus(),
    name: randomTraderName(),
  },
  {
    id: 2,
    phone: 36,
    status: randomStatus(),
    name: randomTraderName(),
  },
  {
    id: 3,
    phone: 19,
    status: randomStatus(),
    name: randomTraderName(),
  },
  {
    id: 4,
    phone: 28,
    status: randomStatus(),
    name: randomTraderName(),
  },
  {
    id: 5,
    phone: 23,
    status: randomStatus(),
    name: randomTraderName(),
  },
];

export default initialRows;
