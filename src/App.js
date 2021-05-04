import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./CoolButton/CoolButton";

function App() {
  return (
    <Layout>
      <div className="App">
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />

        <CoolButton />
        <CoolButton isSmall isDanger className="is-rounded my-class">
          Button 1
        </CoolButton>
        <CoolButton isSmall isSuccess tommeeeh>
          Button 2
        </CoolButton>
        <Signup />
      </div>
    </Layout>
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
      <CoolButton isSuccess isSmall>
        Submit
      </CoolButton>
    </div>
  );
}

function Layout(props) {
  return (
    <div>
      <nav>Stuff looking good</nav>
      {props.children}
      <footer>Stuff looking gooood</footer>
    </div>
  );
}
