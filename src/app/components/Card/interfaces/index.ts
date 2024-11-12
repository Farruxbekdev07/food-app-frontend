import React from "react";

interface CardProps {
  name?: string;
  _id?: string[];
  image?: string;
  className?: string;
  redirectPath?: string;
  price?: number | string;
  quantity?: number | string;
  oldPrice?: number | string;
  direction?: "vertical" | "horizontal" | "payment";
  onClick?: React.MouseEventHandler<HTMLDivElement | any>;
  onChange?: React.MouseEventHandler<HTMLInputElement | any> | any;
}

export default CardProps;
