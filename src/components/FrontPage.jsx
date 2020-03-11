import React, { useState, useEffect } from "react";
import CategorySquare from "./CategorySquare.jsx";

export default function FrontPage() {
  return (
    <div>
      <div className="logoContainer">
        <img src="../../imgs/logos/SkillSync.png" />
      </div>
      <div className="FrontPageContainer">
        <div className="frontPageRow1">
          <div className="squares">
            <CategorySquare
              large={true}
              name={"../../imgs/categories/Music.png"}
            />
            <CategorySquare
              large={true}
              name={"../../imgs/categories/Language.png"}
            />
            <CategorySquare name={"../../imgs/categories/Sports.png"} />
            <CategorySquare name={"../../imgs/categories/Outdoors.png"} />
          </div>
          <div className="featuredMentorContainer">
            <div className="userPhotoFeatured">
              <div className="bottom-left">FEATURED MENTOR</div>
              <div className="bottom-right">BRADLEY</div>
            </div>
          </div>
        </div>
        <div className="homeQuoteContainer">
          <div className="quote">
            "I finally completed my New Year’s resolution to learn to learn
            Spanish thanks to SkillSync!"
          </div>
          <div className="quote-name">-Samantha</div>
        </div>
        <div className="categoryIconList">
          <CategorySquare
            name={"../../imgs/categories/Crafts.png"}
          />
          <CategorySquare
            name={"../../imgs/categories/VisualArt.png"}
          />
          <CategorySquare
            name={"../../imgs/categories/MathScience.png"}
          />
          <CategorySquare
            name={"../../imgs/categories/Food.png"}
          />
          <CategorySquare
            name={"../../imgs/categories/SocialSciences.png"}
          />
          <CategorySquare
            name={"../../imgs/categories/Miscellaneous.png"}
          />
        </div>
      </div>
    </div>
  );
}
