import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import IFoods from "./types";
import FoodStyles from "./Food.style";
import { categories } from "./constants";
import Loader from "../../components/Loader";
import { UserRole } from "../../types/enums";
import InvoiceSidebar from "./components/Sidebar";
import CardComponent from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import ROUTE_PATHS from "../../routes/paths/paths";
import ICard from "../../components/Card/interfaces";
import { GET_ALL_FOODS } from "../../graphql/Query/Foods";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const Foods = () => {
  const userRole = useAppSelector((state) => state.auth?.role) as
    | UserRole
    | "user";
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data, loading } = useQuery(GET_ALL_FOODS);

  const handleSelectCategory = (index: number) => {
    setActiveCategory(index);
  };

  const handleNavigate = () => {
    navigate(ROUTE_PATHS.CREATE_FOOD);
  };

  const foods = data?.getAllFoods?.payload || [];

  return (
    <FoodStyles>
      <PageTitle title="Explore Categories">
        {userRole === "admin" && (
          <Button
            variant="contained"
            onClick={handleNavigate}
            className="create__food-button"
          >
            <AddIcon /> New Food
          </Button>
        )}
      </PageTitle>
      <div className="foods-container">
        <div className="menu-container">
          <div className="chip__card-container">
            {categories.map(({ image, name }: ICard, index) => (
              <CardComponent
                name={name}
                image={image}
                direction="vertical"
                onClick={() => handleSelectCategory(index)}
                className={activeCategory === index ? "chip__card-active" : ""}
              />
            ))}
          </div>
          <div>
            <PageTitle title="Menu" />
            <div className="card-container">
              {loading && <Loader isInner />}
              {foods.map(({ name, price, _id, discount }: IFoods) => (
                <CardComponent
                  _id={_id}
                  name={name}
                  price={price}
                  oldPrice={discount}
                  direction="horizontal"
                  redirectPath={ROUTE_PATHS.UPDATE_FOOD}
                />
              ))}
            </div>
          </div>
        </div>
        {/* {userRole === "user" && <InvoiceSidebar />} */}
        <InvoiceSidebar />
      </div>
    </FoodStyles>
  );
};

export default Foods;
