// import { useState } from 'react'
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply, reset } from "./Counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>App Components count is : {count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />
      <button onClick={() => dispatch(multiply())}>*</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;
