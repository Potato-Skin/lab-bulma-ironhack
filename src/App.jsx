import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Formfield from "./formfield/FormField";
import CoolButton from "./CoolButton/CoolButton";

import React from "react";

function App() {
  // const [counter, setCounter] = React.useState(1);

  return (
    <div className="App">
      <Navbar />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Button1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
    </div>
  );
}

export default App;

// import React from "react";

// import logo from "./logo.svg";
// import "./App.css";

// function Footer(props) {
//   return <footer>Hello counter: {props.counter}</footer>;
// }

// function App() {
//   const [counter, setCounter] = React.useState(1);

//   function increment() {
//     setCounter(counter + 1);
//   }

//   function decrement() {
//     setCounter(counter - 1);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{counter}</p>
//         <button onClick={increment}>+</button>
//         <button onClick={decrement}>-</button>

//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React {counter}
//         </a>
//         <Footer counter={counter} />
//       </header>
//     </div>
//   );
// }

// export default App;
