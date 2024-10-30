import {
  Card,
  Avatar,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  CardActionArea,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import CardStyle from "./Card.style";
import DefaultFood from "../../assets/images/default-food.png";

type Props = {
  name?: string;
  image?: string;
  rate?: number | string;
  price?: number | string;
  oldPrice?: number | string;
  direction: "vertical" | "horizontal";
};

const CardComponent = ({
  rate,
  name,
  price,
  image,
  oldPrice,
  direction,
}: Props) => {
  if (direction === "horizontal") {
    return (
      <CardStyle>
        <CardActionArea>
          <Card className="card">
            <CardMedia
              component="img"
              alt={name || "food"}
              className="card__media"
              image={image || DefaultFood}
            />
            <CardContent className="card__content">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="card__title"
              >
                {name || "Food"}
              </Typography>
              <div className="card__price-container">
                <div className="card__price">
                  <Typography className="card__new__price">
                    ${price || 0}
                  </Typography>
                  <Typography className="card__old__price">
                    ${oldPrice || 0}
                  </Typography>
                </div>
                <div className="card__rate">
                  <StarIcon className="card__rate-icon" />{" "}
                  <Typography className="card__rate-value">
                    {rate || 0}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions className="card__actions">
              <Button variant="outlined">Wishlist</Button>
              <Button variant="contained">Order Now</Button>
            </CardActions>
          </Card>
        </CardActionArea>
      </CardStyle>
    );
  } else {
    return (
      <CardStyle>
        <CardActionArea>
          <Card className="chip__card ">
            <Avatar className="chip__card__media">
              <img src={image || DefaultFood} alt={name || "food"} />{" "}
            </Avatar>
            <CardContent className="chip__card__content">
              <Typography variant="body1" className="chip__card__title">
                {name || "Food"}
              </Typography>
              <Typography variant="body1" className="chip__card__price">
                ${price || 0}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </CardStyle>
    );
  }
};

export default CardComponent;
