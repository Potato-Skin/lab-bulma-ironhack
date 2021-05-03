import React from "react";
import "./Signup.css";

import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";

function Signup() {
  return (
    <div className="signup">
      <Navbar />

      <FormField label="Name" type="text" placeholder="Your name" />
      <FormField label="Email" type="email" placeholder="Your email" />
      <FormField label="Password" type="password" placeholder="Your password" />
      <CoolButton isSuccess>Submit!</CoolButton>
    </div>
  );
}

export default Signup;
