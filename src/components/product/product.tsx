import React from "react";
import ProductProps from "../../interfaces/components/productProps";
import CardComponent from "../card/card";

const ProductComponent: React.FC<ProductProps> = ({
  name,
  shortDescription,
  images,
  category,
}) => {
  const primaryImage = images[0]?.asset.url;
  return (
    <CardComponent>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-green rounded-lg p-2">
          <label className="text-sm font-bold text-black">
            {category.name}
          </label>
        </div>
        <img src={primaryImage} alt={name} className="w-48 h-48 rounded" />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg font-medium text-gray-700">{shortDescription}</p>
      </div>
    </CardComponent>
  );
};
export default ProductComponent;
