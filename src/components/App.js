import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([])
  const [plates, setPlates] = useState([])
  const [moneyLeft, setMoneyLeft] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(sushiData => setSushiList(sushiData))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} plates={plates} setPlates={setPlates} moneyLeft={moneyLeft} setMoneyLeft={setMoneyLeft}/>
      <Table plates={plates} moneyLeft={moneyLeft}/>
    </div>
  );
}

export default App;
