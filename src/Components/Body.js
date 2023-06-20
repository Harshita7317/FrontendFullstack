import { useState } from "react";

<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed&display=swap"
  rel="stylesheet"
/>;

const Body = () => {
  const [counter, setCounter] = useState(0);
  let Level = "";
  console.log(Level);
  if (counter < 5) {
    Level = "Low";
  } else if (counter > 20) {
    Level = "High";
  } else {
    Level = "Medium";
  }
  return (
    <>
      <div className="outer-box">
        <div className="container">
          <div className="inner-box">
            <h1 className="level">
              {" "}
              Level = <span className="blink">{Level}</span>
            </h1>
            <h2 className="counter">
              Current Counter <br />
              <br />
              <span className="blink">{counter}</span>
            </h2>
            <div className="btn-container">
              <button className="btn" onClick={() => setCounter(counter + 1)}>
                Increment
              </button>
              <button className="btn" onClick={() => setCounter(counter - 1)}>
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
