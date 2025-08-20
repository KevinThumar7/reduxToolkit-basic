import { useState } from "react";
import Navbar from "./Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  multiply,
  reset,
} from "./Counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementByAmount(Number(num)));
  };

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
      <br />
      <input
        type="text"
        placeholder="type a number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

export default App;
