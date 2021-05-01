import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField";
import CoolButton from "./coolbutton/CoolButton";

function Signup() {
  return (
    <div className="Signup">
      <Navbar />
      <form>
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <FormField label="Password" type="password" placeholder="password" />
        <CoolButton isSmall isSuccess type="submit">
          Submit
        </CoolButton>
      </form>
    </div>
  );
}

export default Signup;
