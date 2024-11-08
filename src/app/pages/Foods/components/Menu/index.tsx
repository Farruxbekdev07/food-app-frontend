import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import IFoods from "../../types";
import MenuStyle from "./Menu.style";
import Loader from "../../../../components/Loader";
import CardComponent from "../../../../components/Card";
import PageTitle from "../../../../components/PageTitle";
import ROUTE_PATHS from "../../../../routes/paths/paths";
import { GET_ALL_FOODS } from "../../../../graphql/Query/Foods";
import { setSelectedFoods } from "../../../../../store/reducer/foodSlice";

const Menu = () => {
  const [selectFoods, setSelectFood] = useState<number[] | any>([]);

  const { data, loading } = useQuery(GET_ALL_FOODS);

  const dispatch = useDispatch();

  const handleSelectFood = (_id: number | any, isChecked: boolean) => {
    setSelectFood((prev: any) =>
      isChecked ? [...prev, _id] : prev.filter((i: any) => i !== _id)
    );
  };

  const foods: IFoods[] = data?.getAllFoods?.payload || [];

  useEffect(() => {
    dispatch(setSelectedFoods(selectFoods));
    console.log("foods:", data);
  }, [selectFoods]);

  return (
    <>
      {loading && <Loader />}
      <MenuStyle>
        <PageTitle title="Menu" />
        <div className="card-container">
          {foods.map(({ name, price, _id, discount }: IFoods) => (
            <CardComponent
              name={name}
              price={price}
              oldPrice={discount}
              direction="horizontal"
              selected={selectFoods.includes(_id)}
              redirectPath={ROUTE_PATHS.UPDATE_FOOD}
              onChange={(isChecked: boolean) =>
                handleSelectFood(_id, isChecked)
              }
            />
          ))}
        </div>
      </MenuStyle>
    </>
  );
};

export default Menu;
