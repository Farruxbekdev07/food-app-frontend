import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button, Divider, Typography } from "@mui/material";

import { FOODS } from "../Menu/constants";
import { paymentCards } from "./constants";
import SidebarStyles from "./Sidebar.style";
import CardComponent from "../../../../components/Card";
import CardProps from "../../../../components/Card/interfaces";

function InvoiceSidebar() {
  const [foods, setFoods] = useState<CardProps[]>([]);
  const { selectedFoods } = useSelector((state: any) => state.food);

  useEffect(() => {
    for (let index = 0; index < selectedFoods?.length; index++) {
      console.log("selected foods:", selectedFoods[index]);
      FOODS.filter((food: CardProps) => {
        if (selectedFoods[index] === food._id) {
          console.log(food);
          setFoods([...foods, food]);
        }
      });
    }
  }, [selectedFoods]);

  return (
    <SidebarStyles>
      <Typography className="sidebar__title">Invoice</Typography>
      <div className="selected__foods-container">
        {foods.map(({ name, price }: CardProps) => (
          <>
            <CardComponent name={name} price={price} direction="vertical" />
            <Divider />
          </>
        ))}
      </div>
      <div className="payment">
        <Typography className="payment__title">Payment Summary</Typography>
        <div className="food__price-container">
          <Typography className="food__price">Sub Total</Typography>
          <Typography className="food__price">$85</Typography>
        </div>
        <div className="food__price-container">
          <Typography className="food__price">Tax</Typography>
          <Typography className="food__price">-$6</Typography>
        </div>
        <Divider className="divider" />
        <div className="food__price-container">
          <Typography className="total__payment">Total Payment</Typography>
          <Typography className="total__payment">$79</Typography>
        </div>
        <Typography className="payment__method">Payment Method</Typography>
        <div className="payment__method-cards">
          {paymentCards.map(({ icon }) => (
            <CardComponent direction="payment" image={icon} />
          ))}
        </div>
      </div>
      <Button variant="contained" fullWidth className="payment__button">
        Place An Order Now
      </Button>
    </SidebarStyles>
  );
}

export default InvoiceSidebar;
