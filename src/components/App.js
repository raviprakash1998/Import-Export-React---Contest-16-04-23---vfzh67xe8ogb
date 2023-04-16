import React, { Component, useState } from "react";
import '../styles/App.css';
import './Heading.js';
import './SubHeading.js';
import './InputQuery.js';
import './SubmitButton.js';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQurey />
      <SubmitButton />
    </div>
  )
}

export default App;


