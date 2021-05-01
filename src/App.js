import logo from "./logo.svg";
import "./App.css";

import Navbar from "./navbar/Navbar.js";
import "./navbar/Navbar.css";

import FormField from "./formfield/FormField.js";
import "./formfield/FormField.css";

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
    </div>
  );
}

export default App;
