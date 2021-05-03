import "./App.css";
import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";
import Signup from "./signup/Signup";
import Container from "./container/Container";
import Message from "./message/Message";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="email" placeholder="Email" />
      <CoolButton className="is-rounded is-danger">Button 1</CoolButton>
      <CoolButton isSuccess>Button 2</CoolButton>
      <Signup />
      <Container>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          sapien et eros lacinia luctus.
          <strong> Pellentesque risus mi</strong>.
        </Message>
      </Container>
    </div>
  );
}

export default App;
