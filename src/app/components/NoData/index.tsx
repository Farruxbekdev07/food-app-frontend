import { Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

import { NoDataStyles } from "./NoData.style";

const NoData = () => (
  <NoDataStyles>
    <SentimentDissatisfiedIcon color="disabled" fontSize="large" />
    <Typography variant="h6" color="textSecondary" mt={2}>
      No data available
    </Typography>
  </NoDataStyles>
);

export default NoData;
