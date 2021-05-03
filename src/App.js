import "./App.css";
import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="email" placeholder="Email" />
      <CoolButton className="is-rounded is-danger">Button 1</CoolButton>
      <CoolButton isSuccess>Button 2</CoolButton>
    </div>
  );
}

export default App;
