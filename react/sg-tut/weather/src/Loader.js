import React from "react";

const Loader = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};

//This gives the loader a text value if the message is missing... Useful when you need different messages.
Loader.defaultProps = {
  message: "Loading..."
};

export default Loader;
