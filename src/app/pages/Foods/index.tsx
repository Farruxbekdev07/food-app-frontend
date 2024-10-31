import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Menu from "./components/Menu";
import FoodStyles from "./Food.style";
import Categories from "./components/Categories";
import InvoiceSidebar from "./components/Sidebar";
import PageTitle from "../../components/PageTitle";

const Foods = () => {
  return (
    <FoodStyles>
      <PageTitle title="Explore Categories">
        <Button variant="contained" className="create__food-button">
          <AddIcon /> New Food
        </Button>
      </PageTitle>
      <div className="foods-container">
        <div className="menu-container">
          <Categories />
          <Menu />
        </div>
        <InvoiceSidebar />
      </div>
    </FoodStyles>
  );
};

export default Foods;
