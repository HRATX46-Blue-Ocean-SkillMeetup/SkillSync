import React, { useState } from "react";

const EditableStarRating = props => {
  const [currentStarsValues, setcurrentStarsValues] = useState([
    false,
    false,
    false,
    false,
    false
  ]);

  const updateStars = num => {
    let starBulArr = [];
    for (let i = 0; i < props.totalStars; i++) {
      if (i <= num) {
        starBulArr.push(true);
      } else {
        starBulArr.push(false);
      }
    }

    setcurrentStarsValues(starBulArr);
  };

  return (
    <div>
      {currentStarsValues.map((starValue, indx) => {
        if (starValue) {
          return (
            <span key={indx}>
              <img
                src={props.full}
                alt={`${indx}`}
                width={props.width}
                height={props.height}
                onClick={() => {
                  updateStars(indx);
                  if (props.starClickCallback) {
                    props.setRating(indx + 1);
                  }
                }}
              />
            </span>
          );
        } else {
          return (
            <span key={indx}>
              <img
                src={props.empty}
                alt={`${indx}`}
                width={props.width}
                height={props.height}
                key={`${indx}`}
                onClick={() => {
                  updateStars(indx);
                  if (props.starClickCallback) {
                    props.setRating(indx + 1);
                  }
                }}
              />
            </span>
          );
        }
      })}
    </div>
  );
};

export default EditableStarRating;
