import { useState } from "react";
import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

import IFoods from "./types";
import FoodStyles from "./Food.style";
import { categories } from "./constants";
import Loader from "../../components/Loader";
import { UserRole } from "../../types/enums";
import InvoiceSidebar from "./components/Sidebar";
import ChipComponent from "../../components/Chip";
import CardComponent from "../../components/Card";
import PageTitle from "../../components/PageTitle";
import ROUTE_PATHS from "../../routes/paths/paths";
import { useAppSelector } from "../../hooks/redux";
import ICard from "../../components/Card/interfaces";
import { GET_ALL_FOODS } from "../../graphql/Query/Foods";

const Foods = () => {
  const userRole = useAppSelector((state) => state.auth?.role) as
    | UserRole
    | "user";
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const navigate = useNavigate();

  const { data, loading } = useQuery(GET_ALL_FOODS);

  const handleSelectCategory = (index: number) => {
    setActiveCategory(index);
    console.log("index:", index);
  };

  const handleNavigate = () => {
    navigate(ROUTE_PATHS.CREATE_FOOD);
  };

  const foods = data?.getAllFoods?.payload || [];

  return (
    <FoodStyles>
      <PageTitle title="Explore Categories">
        {userRole !== "admin" && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleNavigate}
          >
            New Food
          </Button>
        )}
      </PageTitle>
      <div className="foods-container">
        <div className="menu-container">
          <div className="chip__card-container">
            {categories.map(({ image, name }: ICard, index) => (
              <ChipComponent
                name={name}
                image={image}
                onClick={() => handleSelectCategory(index)}
                className={activeCategory === index ? "chip__card-active" : ""}
              />
            ))}
          </div>
          <div>
            <PageTitle title="Menu" />
            <div className="card-container">
              {loading && <Loader isInner />}
              {foods.map(
                ({ name, price, id, discount, image, shortName }: IFoods) => (
                  <CardComponent
                    _id={id}
                    type="food"
                    image={image}
                    price={price}
                    name={name || ""}
                    discount={discount}
                  />
                )
              )}
              <CardComponent _id="2" type="order" userName="John Doe" />
            </div>
          </div>
        </div>
        {userRole === "user" && <InvoiceSidebar />}
        <InvoiceSidebar />
      </div>
    </FoodStyles>
  );
};

export default Foods;
