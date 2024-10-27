import AddIcon from "@mui/icons-material/Add";
import { Button, Typography } from "@mui/material";

import { FoodStyles } from "./Food.style";
import PageTitle from "../../components/PageTitle";

const Foods = () => {
  return (
    <FoodStyles>
      <PageTitle title="Foods">
        <Button variant="contained" className="create__food-button">
          <AddIcon />
          <Typography className="create__food-text">Create food</Typography>
        </Button>
      </PageTitle>
    </FoodStyles>
  );
};

export default Foods;
