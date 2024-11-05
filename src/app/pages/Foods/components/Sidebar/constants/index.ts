import CardProps from "../../../../../components/Card/interfaces";

import Visa from "../../../../../assets/images/visa.png";
import BKash from "../../../../../assets/images/bKash.png";
import PayPal from "../../../../../assets/images/paypal.png";
import MasterCard from "../../../../../assets/images/mastercard.png";

const selectedFoods: CardProps[] = [
  {
    name: "Vegetable Burger",
    price: 25,
  },
  {
    name: "Meat Burger",
    price: 25,
  },
  {
    name: "Cheese Burger",
    price: 25,
  },
];

const paymentCards = [
  {
    icon: BKash || "",
  },
  {
    icon: PayPal || "",
  },
  {
    icon: MasterCard || "",
  },
  {
    icon: Visa || "",
  },
];

export { selectedFoods, paymentCards };
