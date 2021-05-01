import "./App.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";
import Signup from "./Signup";

function App() {
  return (
    <div className="App">
      {
        <Signup />

        //UNCOMMENT FOR PREVIOUS ITERATIONS (1-3)

        /* <Navbar />
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
      </CoolButton> */
      }
    </div>
  );
}

export default App;
