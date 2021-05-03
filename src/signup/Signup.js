import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";

function Signup() {
  return (
    <div>
      <Navbar />
      <FormField label="Email" type="email" placeholder="Email" />
      <FormField label="Password" type="text" placeholder="Password" />
      <CoolButton className="is-rounded is-danger">Sign up</CoolButton>
    </div>
  );
}

export default Signup;
