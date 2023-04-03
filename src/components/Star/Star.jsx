import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Star.css";

const Star = () => {
  const [star1, setStar1] = useState(faStar);

  function changeRating() {
    setStar1(solidStar);
  }

  return (
    <div>
      <FontAwesomeIcon
        icon={star1}
        className="starIcon"
        onClick={changeRating}
      />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
};

export default Star;
