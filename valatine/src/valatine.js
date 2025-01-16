import React, { useState } from "react";
import b from "./brown-love-heart-brown-cute-heart.gif";
import ak from "./3FE854BE-1259-4CD9-99D2-212F11B0BBDC.JPG";
import "./App.css";

function Valatine() {
  const [num, setNum] = useState(0);
  const [con, setCon] = useState(false);
  let valatine = [
    { words: "apdi pogutho kathai", width: "", height: "" },
    { words: "28k selavu panna", width: "200px", height: "90px" },
    { words: "hey avana ushar panna poriya", width: "300px", height: "120px" },
    { words: "whatsApp la annupiran", width: "400px", height: "180px" },
  ];

  return (
    <div>
      <h2>
        {con ? "Thank you for being my monkey 😍😍" : "Can you be my monkey :)"}
      </h2>
      <img src={con ? ak : b} alt={con ? "bear kisses" : "heart"} className={con &&"ak-style"}/>
      <br />
      {!con ? (
        <div>
          <button
            className="ok"
            onClick={() => setCon(true)}
            style={{ width: valatine[num].width, height: valatine[num].height }}
          >
            kapi kuddika varigala doli !
          </button>
          <button
            className="not"
            onClick={() => {
              setCon(false);
              setNum(num === 3 ? 0 : num + 1);
            }}
          >
            {valatine[num].words}
          </button>
        </div>
      ) : (
        <h2>Thank you Doli 😘</h2>
      )}
    </div>
  );
}

export default Valatine;
