import React from "react";
import "./seasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Damn, it is hot!",
    iconName: "sun"
  },
  winter: {
    text: "Damn, it is cold!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      {/* Use the template literalts to get the icon season, and use the classname icon. */}
      <i className={`${iconName} icon massive leftIcon`} />
      <h1 className="fontStyle">{text}</h1>
      <i className={`${iconName} icon massive rightIcon`} />
    </div>
  );
};
export default SeasonDisplay;
