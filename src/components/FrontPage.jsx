import React, { useState, useEffect } from "react";
import CategorySquare from "./CategorySquare.jsx";

export default function FrontPage() {
  return (
    <div>
      <div className="searchBarContainer">SEARCHBAR</div>
      <div className="logoContainer">
        <img src="../../imgs/logos/SkillSync.png" />
      </div>
      <div className="FrontPageContainer">
        <div className="frontPageRow1">
          <CategorySquare name={"./imgs/categories/Music.png"} />
          <CategorySquare name={"../../imgs/categories/Language.png"} />
          <br />
          <CategorySquare name={"../../imgs/categories/Sports.png"} />
          <CategorySquare name={"../../imgs/categories/Outdoors.png"} />
          <span className="featuredMentorContainer">
            <div className="userPhotoFeatured">
              <div class="bottom-left">FEATURED MENTOR</div>
              <div class="bottom-right">BRADLEY</div>
            </div>
          </span>
        </div>
        <div className="homeQuoteContainer">
          <span className="quote">"</span>I finally completed my New Year’s
          resolution to learn to learn Spanish thanks to SkillSync!
          <span className="quote">"</span>
          -Samantha
        </div>
        <div className="categoryIconList">
          <CategorySquare
            large={true}
            name={"../../imgs/categories/Crafts.png"}
          />
          <CategorySquare
            large={true}
            name={"../../imgs/categories/VisualArt.png"}
          />
          <CategorySquare
            large={true}
            name={"../../imgs/categories/MathScience.png"}
          />
          <br />
          <CategorySquare
            large={true}
            name={"../../imgs/categories/Food.png"}
          />
          <CategorySquare
            large={true}
            name={"../../imgs/categories/SocialSciences.png"}
          />
          <CategorySquare
            large={true}
            name={"../../imgs/categories/Miscellaneous.png"}
          />
        </div>
      </div>
    </div>
  );
}
