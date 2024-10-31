import { useState } from "react";

import { categories } from "./constants";
import MenuStyle from "../Menu/Menu.style";
import CardComponent from "../../../../components/Card";
import CardProps from "../../../../components/Card/interfaces";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const handleSelectCategory = (index: number) => {
    setActiveCategory(index);
  };

  return (
    <MenuStyle>
      <div className="chip__card-container">
        {categories.map(({ image, name }: CardProps, index) => (
          <CardComponent
            name={name}
            image={image}
            direction="vertical"
            onClick={() => handleSelectCategory(index)}
            className={activeCategory === index ? "chip__card-active" : ""}
          />
        ))}
      </div>
    </MenuStyle>
  );
};

export default Categories;
