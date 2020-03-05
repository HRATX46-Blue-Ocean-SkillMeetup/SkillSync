import React, { useState, useEffect } from "react";

export default function CategorySquare({name}) {


  return (
    <span className="categorySquare">
      <img src={name} width="138px"/>
    </span>
  );

};