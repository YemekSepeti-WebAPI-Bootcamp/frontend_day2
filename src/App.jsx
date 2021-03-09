import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import FormInput from "./components/FormInput";

{
  /* <Header text="Todos" /> */
}
{
  /* <FormInput
  labelText="Enter Todo"
  inputValue={textInputValue}
  setTextInputValue={setTextInputValue}
/> */
}
{
  /* <hr /> */
}
{
  /* {textInputValue} */
}
{
  /* <Button /> */
}

function App(props) {
  const [counter, setCounter] = useState(0);

  // let counter = 0;

  // function setCounter(newValue) {
  //   counter = newValue;
  // }

  return (
    <div>
      <button
        onClick={() => {
          const newCounter = counter - 1;
          setCounter(newCounter);
        }}
      >
        Azalt
      </button>
      <h1> {counter} </h1>
      <button
        onClick={() => {
          const newCounter = counter + 1;
          setCounter(newCounter);
        }}
      >
        Artır
      </button>
    </div>
  );
}

export default App;
