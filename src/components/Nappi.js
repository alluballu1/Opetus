import React from "react";
import "./nappi.css";

const Nappi = () => {
  const muuttujaNimi = "Hello world";

  /* ========================================= */

  const funktio = (x, y) => {
    const lista = [];
    const loopCount = y;
    let looped = 0;
    while (looped < loopCount) {
      lista.push(x ** looped);
      looped = looped + 1;
    }
    return lista;
  };

  /* ========================================= */
  const funktio1 = (stringy) => {
    const string = stringy;
    let loopCount = 0;
    let empty = "";
    while (loopCount !== string.length) {
      empty += string[loopCount];
      console.log(empty);
      loopCount++;
    }
  };

  /* ========================================= */

  return (
    <div className="container">
      <button className="nappi" onClick={() => console.log(funktio(10,10))}>
        Nappi
      </button>
      <button
        className="nappi"
        id="nappi-id"
        onClick={() => alert(muuttujaNimi)}
      >
        Nappi
      </button>
      <button className="nappi" onClick={() => alert(muuttujaNimi)}>
        Nappi
      </button>
    </div>
  );
};

export default Nappi;
