import { faStar as openStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Star.css";

const Star = () => {
  const [starRatings, setStarRatings] = useState([
    openStar,
    openStar,
    openStar,
    openStar,
    openStar,
  ]);

  function changeRating(e, num) {
    let array = starRatings;
    if (array[num] !== solidStar) {
      for (let i = 0; i <= num; i++) {
        array[i] = solidStar;
      }
    } else {
      if (array[num + 1] !== solidStar) {
        array[num] = openStar;
      } else {
        for (let i = 4; i >= num; i--) {
          array[i] = openStar;
        }
      }
    }

    setStarRatings([...array]);
  }

  return (
    <div>
      {starRatings.map((val, index) => {
        return (
          <FontAwesomeIcon
            icon={val}
            className="starIcon"
            onClick={(e) => changeRating(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Star;
