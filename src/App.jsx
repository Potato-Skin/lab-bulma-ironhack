import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Formfield from "./FormField/FormField";
import CoolButton from "./CoolButton/CoolButton";

import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
}

export default App;
