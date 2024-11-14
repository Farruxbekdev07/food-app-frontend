import CardProps from "./interfaces";
import FoodCard from "./components/Food";
import OrderCard from "./components/Order";

const CardComponent = ({
  _id,
  name,
  type,
  price,
  image,
  userName,
  discount,
  userOrders,
}: CardProps) => {
  if (type === "food") {
    return (
      <FoodCard
        id={_id}
        name={name}
        image={image}
        price={price}
        discount={discount}
      />
    );
  }

  if (type === "order") {
    return <OrderCard userName={userName || ""} orders={userOrders || []} />;
  }
};

export default CardComponent;
