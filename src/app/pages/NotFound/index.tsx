import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import ROUTE_PATHS from "../../routes/paths";
import { useNavigate } from "react-router-dom";
import { NotFoundStyles } from "./NotFound.style";
import NotFoundImage from "../../assets/images/not-found.png";

export default function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(ROUTE_PATHS.MAIN);
  };

  return (
    <NotFoundStyles>
      <div className="not__found">
        <img src={NotFoundImage} alt="Not Found" className="not__found-image" />
        <Typography className="not__found-text">
          Oops! The page you were looking for doesn't exist
        </Typography>
        <Button
          variant="contained"
          onClick={handleBack}
          className="not__found-button"
        >
          <ArrowBackIcon /> Back Home
        </Button>
      </div>
    </NotFoundStyles>
  );
}
