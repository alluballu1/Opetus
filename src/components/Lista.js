import React from "react";



const Lista = () => {
  const lista = [
    "lista osio 1",
    "lista osio 2",
    "lista osio 3",
    "lista osio 4",
    "lista osio 5",
    "lista osio 6",
  ];

  const funktio2 = () => {
    const string = "KOKEILU"
    let loopCount = 0
    let empty = ""
    while (loopCount !== string.length) {
      empty += string[loopCount]
      console.log(empty)
      loopCount++
    }
  }

  return (
    <div>
      {lista.map((each) => {
        return <li>{each}</li>;
      })}
      <button onClick={() => funktio2()}>dsfdsf</button>
    </div>
  );
};

export default Lista;
