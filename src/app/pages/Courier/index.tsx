import React from "react";
import { CourierStyle } from "./Courier.style";
import CourierCard from "./components/Card";

type Props = {};

const Courier = (props: Props) => {
  return (
    <CourierStyle>
      <CourierCard />
    </CourierStyle>
  );
};

export default Courier;
