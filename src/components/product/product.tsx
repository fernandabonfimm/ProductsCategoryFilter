import React from "react";
import ProductProps from "../../interfaces/components/productProps";
import CardComponent from "../card/card";
import "./styles.css";

const ProductComponent: React.FC<ProductProps> = ({
  name,
  shortDescription,
  images,
  category,
}) => {
  const primaryImage = images[0]?.asset.url;
  return (
    <CardComponent>
      <div className="divCol">
        <div className="tagElemtn">
          <label className="tagElemtnText">
            {category.name}
          </label>
        </div>
        <img src={primaryImage} alt={name} className="imageClass" />
        <h2 className="textTitle">{name}</h2>
        <p className="descriptoText">{shortDescription}</p>
      </div>
    </CardComponent>
  );
};
export default ProductComponent;
