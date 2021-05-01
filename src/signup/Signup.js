import React from "react";

function Signup(props) {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="password" />

      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Signup
      </CoolButton>
    </div>
  );
}

export default Signup;
