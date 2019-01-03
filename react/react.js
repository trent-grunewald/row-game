//The basics of React


// Creating a basic React Element on the DOM
//className = class
// const name = "Trent";

// const description = "Heyooooo! I just learned how to create a React node and place it in the dom";

// const myTitleID = 'main-title';

// const header = (
//   <header>
//     <h1 id={ myTitleID }>{ name }'s React page</h1>
//     <p>{ description }</p>
//   </header>
// );

// ReactDOM.render(
//   header,
//   document.getElementById('root')
// );
// -----------------------------------------------------------------------------

// Creating reusable COMPONENTS

//Capitalize the function name to specify a React component.
//props is the header array / arguement - title and totalPlayers are set in the app Component below
const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Trent
      </span>
      {/* A component containing another component is called "Composition" */}
      <Counter />      
    </div>
  );
}

const Counter = () => {
  return (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={1} />
    <Player />
    </div>
  );
}

ReactDOM.render(
  //CAPITALIZED to refer to a React component and not an HTML Element.
  //Can be self closing if you don't have children.
  <App />,
  document.getElementById('root')
)