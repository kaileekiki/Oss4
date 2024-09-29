import React, { useState } from 'react';
import './Button.css';

function Button() {
  function handleClick(event) {
    event.target.style.backgroundColor = 'red';
  }

  return (
    <button className="color-button" onClick={handleClick}>
      Click me
    </button>
  );
}

export default Button;
