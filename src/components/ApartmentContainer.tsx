import React from "react";
import "./style/apartmentContainer.css";

interface ApartmentContainerProps {
  image: string;
  name: string;
}

const ApartmentContainer: React.FC<ApartmentContainerProps> = ({
  image,
  name,
}) => {
  return (
    <div className="container-wrapper">
      <div className="apartment">
        <div>
          <img className="apartment-image" src={image} alt="slika" />
        </div>
        <div className="apartment-title">
          <h2 className="title">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ApartmentContainer;
