import Navbar from "../Navbar/Navbar";
import FormField from "../FormField/FormField";
import CoolButton from "../CoolButton/CoolButton";

const Signup = (props) => {
  return (
    <div className="Signup">
      <Navbar>{props.Navbar}</Navbar>

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
    </div>
  );
};
export default Signup;
