import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { FOODS } from "./constants";
import MenuStyle from "./Menu.style";
import CardComponent from "../../../../components/Card";
import PageTitle from "../../../../components/PageTitle";
import CardProps from "../../../../components/Card/interfaces";
import { setSelectedFoods } from "../../../../../store/reducer/foodSlice";

const Menu = () => {
  const [selectFoods, setSelectFood] = useState<number[] | any>([]);

  const dispatch = useDispatch();

  const handleSelectFood = (_id: number | any, isChecked: boolean) => {
    setSelectFood((prev: any) =>
      isChecked ? [...prev, _id] : prev.filter((i: any) => i !== _id)
    );
  };

  useEffect(() => {
    dispatch(setSelectedFoods(selectFoods));
  }, [selectFoods]);

  return (
    <MenuStyle>
      <PageTitle title="Menu" />
      <div className="card-container">
        {FOODS.map(({ name, rate, image, price, oldPrice, _id }: CardProps) => (
          <CardComponent
            rate={rate}
            name={name}
            image={image}
            price={price}
            oldPrice={oldPrice}
            direction="horizontal"
            selected={selectFoods.includes(_id)}
            onChange={(isChecked: boolean) => handleSelectFood(_id, isChecked)}
          />
        ))}
      </div>
    </MenuStyle>
  );
};

export default Menu;
