import React from "react";
import ReactDOM from "react-dom";
import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";

// class UserForm extends React.Component {
//   render() {
//     return(
//     <form>
//       <label>Enter a username: </label>
//       <input type="text"/>
//     </form>
//     )
//   }
// }

// class Clock extends React.Component {
//   state = { time: new Date().toLocaleTimeString() };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ time: new Date().toLocaleTimeString() });
//     }, 1000);
//   }

//   render() {
//     return <div className="time">The time is: {this.state.time}</div>;
//   }
// }

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <Loader message="Please accept the location request" />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
