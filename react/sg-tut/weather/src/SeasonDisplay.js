import React from "react";

class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  render() {
    return (
      <h1>
        Buy The Barn: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </h1>
    );
  }
}

export default SeasonDisplay;
