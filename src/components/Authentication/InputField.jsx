import React, { useState, useEffect } from "react";

export default function InputField({ forid, type, value, setValue, rows, cols }) {
  return (
    <div className="login-field">
      {/* <label htmlFor={forid}>{forid}</label> */}
      <input
        id={forid}
        type={type}
        value={value}
        placeholder={forid}
        onChange={event => {
          setValue(event.target.value);
        }}
      ></input>
    </div>
  );
}
