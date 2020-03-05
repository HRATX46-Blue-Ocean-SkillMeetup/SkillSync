import React, { useState, useEffect } from "react";
import CategorySquare from "./CategorySquare.jsx";

export default function FrontPage() {

  return (
    <div>
      <div className="logoContainer">
        <img src="../../imgs/logos/SkillSync.png"/>
      </div>
      <div className="frontPageContainer">
        <div className="frontPageRow1">
          <CategorySquare name={"../../imgs/categories/Music.png"} />
          <CategorySquare name={"../../imgs/categories/Language.png"} />
          <br /><CategorySquare name={"../../imgs/categories/Sports.png"} />
          <CategorySquare name={"../../imgs/categories/Outdoors.png"} />
        <span className="featuredMentorContainer">
          <div className="userPhotoFeatured">
          <div className="bottom-left">FEATURED MENTOR</div>
          <div className="bottom-right">BRADLEY</div>
          </div>
        </span>
        </div>
        <div className="homeQuoteContainer">
          <span className="quote">" </span>
            I finally completed my New Year’s resolution to learn to learn Spanish thanks to SkillSync!
          <span className="quote"> ”</span>
            <br />-Samantha
        </div>
        <div className="categoryIconList">
        <CategorySquare name={"../../imgs/categories/Crafts.png"} />
        <CategorySquare name={"../../imgs/categories/VisualArt.png"} />
        <CategorySquare name={"../../imgs/categories/MathScience.png"} />
        <br /><CategorySquare name={"../../imgs/categories/Food.png"} />
        <CategorySquare name={"../../imgs/categories/SocialSciences.png"} />
        <CategorySquare name={"../../imgs/categories/Miscellaneous.png"} />
        </div>
      </div>
    </div>
  );

}