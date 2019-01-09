//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App = () => {
  const justSaying = "Buy The Barn!";

  return (
    <div>
      <label htmlFor="name" className="class">
        Enter Name:
      </label>
      <input type="text" id="name" />
      <button
        style={{
          backgroundColor: "blue",
          color: "white"
        }}
      >
        Submit
      </button>
      <h1>{justSaying}</h1>
    </div>
  );
};

//Show react component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
