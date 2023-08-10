import React from "react";
import CardProps from "../../interfaces/components/cardProps";

const CardComponent: React.FC<CardProps> = ({
  borderColor,
  backgroundColor,
  width,
  height,
  children,
}) => {
  return (
    <div
      className={`border-${borderColor} bg-${backgroundColor ?? "white"} w-${
        width ?? "full"
      } h-${height} p-20 rounded-md shadow-md`}
    >
      {children}
    </div>
  );
};

export default CardComponent;