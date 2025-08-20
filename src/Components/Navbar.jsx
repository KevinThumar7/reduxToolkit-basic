import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Count is : {count}</h1>
    </div>
  );
}

export default Navbar;
