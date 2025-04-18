import CardProps from "./interfaces";
import FoodCard from "./components/Food";
import OrderCard from "./components/Order";
import CartItem from "./components/CartItem";
import Burger from "../../assets/images/burger.png";

const CardComponent = ({
  _id,
  name,
  type,
  price,
  image,
  userName,
  discount,
  quantity,
  userOrders,
}: CardProps) => {
  if (type === "food") {
    return (
      <FoodCard
        _id={_id}
        name={name}
        image={image}
        price={price}
        discount={discount}
      />
    );
  }

  if (type === "cartItem") {
    return (
      <CartItem
        id={_id || ""}
        price={price || 0}
        title={name || ""}
        image={image || Burger}
        quantity={quantity || 1}
      />
    );
  }
};

export default CardComponent;
