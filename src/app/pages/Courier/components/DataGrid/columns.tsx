import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomId,
  randomArrayItem,
  randomTraderName,
} from "@mui/x-data-grid-generator";

const status = ["Pending", "Cooking", "Delivering", "Received"];

const randomStatus = () => {
  return randomArrayItem(status);
};

const initialRows: GridRowsProp = [
  {
    id: 1,
    name: randomTraderName(),
    phone: 25,
    status: randomStatus(),
  },
  {
    id: 2,
    name: randomTraderName(),
    phone: 36,
    status: randomStatus(),
  },
  {
    id: 3,
    name: randomTraderName(),
    phone: 19,
    status: randomStatus(),
  },
  {
    id: 4,
    name: randomTraderName(),
    phone: 28,
    status: randomStatus(),
  },
  {
    id: 5,
    name: randomTraderName(),
    phone: 23,
    status: randomStatus(),
  },
];

export default initialRows;
