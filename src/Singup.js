import React from "react";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

export default function Signup() {
    return (
        <div>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
                label="Email"
                type="email"
                placeholder="e.g alexsmith@gmail.com"
            />
            <FormField
                label="Password"
                type="password"
                placeholder="password"
            />
            <CoolButton isSuccess isSmall>
                Submit
            </CoolButton>
        </div>
    );
}
