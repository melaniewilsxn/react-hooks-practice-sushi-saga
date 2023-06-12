import React, { useState } from "react";

function Sushi({ sushi, plates, setPlates, moneyLeft, setMoneyLeft }) {
  const [eaten, setEaten] = useState(false)

  function handleClick(){
    if(moneyLeft-sushi.price > 0){
    setEaten(true)
    setPlates([...plates, sushi.id])
    setMoneyLeft(moneyLeft-sushi.price)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
