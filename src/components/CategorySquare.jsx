import React, { useState, useEffect } from "react";

export default function CategorySquare({ name, large }) {
  return (
    <div
      className={large ? "categorySquare desktop" : "categorySquare"}
      // style={{ display: large ? "block" : "none" }}
    >
      <img src={name} />
    </div>
  );
}
