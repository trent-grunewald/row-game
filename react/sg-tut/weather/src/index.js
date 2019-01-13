import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Buy The Barn: {this.state.errorMessage}</h1>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <h1>BUY THE BARN! {this.state.lat}</h1>;
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <div />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
