import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";

import DefaultMedia from "../../assets/images/burger.png";
import { ChipStyles } from "./Chip.style";

interface Props {
  name?: string;
  image?: string;
  className?: string;
  onClick?: () => void;
  price?: number | string;
  quantity?: number | string;
}

function ChipComponent({
  name,
  price,
  image,
  onClick,
  quantity,
  className,
}: Props) {
  return (
    <ChipStyles onClick={onClick}>
      <Card className={`chip__card ${className}`}>
        <Avatar className="chip__card__media">
          <img src={image || DefaultMedia} alt={name || "food"} />{" "}
        </Avatar>
        <CardContent className="chip__card__content">
          <div>
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
          </div>
          {quantity ? (
            <div className="chip__card__quantity">
              <IconButton>-</IconButton>
              <Typography className="card__quantity-value">
                {quantity || 0}
              </Typography>
              <IconButton>+</IconButton>
            </div>
          ) : (
            ""
          )}
        </CardContent>
      </Card>
    </ChipStyles>
  );
}

export default ChipComponent;
