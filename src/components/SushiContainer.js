import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiList, plates, setPlates, moneyLeft, setMoneyLeft }) {

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(5)

  const displaySushi = sushiList.filter((sushi) => {
    return ((sushi.id > min) && (sushi.id < max))
  })

  return (
    <div className="belt">
      {displaySushi.map((sushi) => <Sushi sushi={sushi} key={sushi.id} plates={plates} setPlates={setPlates} moneyLeft={moneyLeft} setMoneyLeft={setMoneyLeft}/>)}
      <MoreButton min={min} setMin={setMin} max={max} setMax={setMax}/>
    </div>
  );
}

export default SushiContainer;
