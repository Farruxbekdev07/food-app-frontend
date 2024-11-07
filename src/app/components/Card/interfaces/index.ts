import React from "react";

interface ICard {
  name?: string;
  image?: string;
  selected?: boolean;
  className?: string;
  _id?: number | string;
  redirectPath?: string;
  rate?: number | string;
  price?: number | string;
  oldPrice?: number | string;
  direction?: "vertical" | "horizontal" | "payment";
  onClick?: React.MouseEventHandler<HTMLDivElement | any>;
  onChange?: React.MouseEventHandler<HTMLInputElement | any> | any;
}

export default ICard;
