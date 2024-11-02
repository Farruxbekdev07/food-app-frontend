import {
  Card,
  Avatar,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  CardActionArea,
  Checkbox,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

import CardStyle from "./Card.style";
import CardProps from "./interfaces";
import DefaultFood from "../../assets/images/default-food.png";

const CardComponent = ({
  rate,
  name,
  price,
  image,
  onClick,
  onChange,
  selected,
  oldPrice,
  direction,
  className,
}: CardProps) => {
  const handleSelectFood = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  if (direction === "horizontal") {
    return (
      <CardStyle>
        <Card className={`card ${className} ${selected ? "card-active" : ""}`}>
          <div className="selected__card-container">
            <Checkbox
              checked={selected}
              className="checkbox"
              onChange={handleSelectFood}
              inputProps={{ "aria-label": "controlled" }}
            />
            <CardMedia
              component="img"
              alt={name || "food"}
              className="card__media"
              image={image || DefaultFood}
            />
          </div>
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
      </CardStyle>
    );
  } else if (direction === "vertical") {
    return (
      <CardStyle onClick={onClick}>
        <CardActionArea>
          <Card className={`chip__card ${className}`}>
            <Avatar className="chip__card__media">
              <img src={image || DefaultFood} alt={name || "food"} />{" "}
            </Avatar>
            <CardContent className="chip__card__content">
              <Typography variant="body1" className="chip__card__title">
                {name || "Food"}
              </Typography>
              {price ? (
                <Typography variant="body1" className="chip__card__price">
                  ${price || 0}
                </Typography>
              ) : (
                ""
              )}
            </CardContent>
          </Card>
        </CardActionArea>
      </CardStyle>
    );
  } else {
    return (
      <CardStyle>
        <CardActionArea>
          <Card className={`chip__card payment__card ${className}`}>
            <Avatar className="chip__card__media payment__media">
              <img src={image || DefaultFood} alt={name || "food"} />{" "}
            </Avatar>
          </Card>
        </CardActionArea>
      </CardStyle>
    );
  }
};

export default CardComponent;
