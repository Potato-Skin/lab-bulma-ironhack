import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import FormField from "./FormField/FormField";
import CoolButton from "./CoolButton/CoolButton";
import Signup from "./Signup/Signup";
import Message from "./Message/Message";
import Container from "./Container/Container";
function App() {
  return (
    <div className="App">
      <Container />
      <Signup />
      <Message />
      {/* <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smit" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSucces>
        Button 2
      </CoolButton>  */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
