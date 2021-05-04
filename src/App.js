import logo from "./logo.svg";
import "./App.css";

import Navbar from "./navbar/Navbar.jsx";
import "./navbar/Navbar.css";

import FormField from "./formfield/FormField.jsx";
import "./formfield/FormField.css";

import CoolButton from "./coolbutton/CoolButton.jsx";
import "./coolbutton/CoolButton.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
      <Signup />
    </div>
  );
}

export default App;

function Signup() {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Gimme yo name" />
      <FormField label="Email" type="email" placeholder="Gimme yo email" />
      <FormField
        label="Password"
        type="password"
        placeholder="Gimme yo password"
      />
      <CoolButton isWarning>Submit</CoolButton>
    </div>
  );
}
