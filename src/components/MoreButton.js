import React from "react";

function MoreButton({ min, setMin, max, setMax}) {

  function handleClick(){
    setMin(min+4)
    setMax(max+4)
  }
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
