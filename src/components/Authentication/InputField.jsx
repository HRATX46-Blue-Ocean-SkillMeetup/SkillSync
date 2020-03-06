import React, { useState, useEffect } from "react";

export default function InputField({ forid, type, value, setValue }) {
  return (
    <>
      <label htmlFor={forid}>{forid}</label>
      <input
        id={forid}
        type={type}
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      ></input>
    </>
  );
}
