import React from "react";
import CardProps from "../../interfaces/components/cardProps";
import "./styles.css";

const CardComponent: React.FC<CardProps> = ({ children }) => {
  return <div className={`cardStyle`}>{children}</div>;
};

export default CardComponent;
