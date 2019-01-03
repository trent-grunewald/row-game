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

const players = [
  {
    name: "Trent",
    score: 77,
    id: 1
  },
  {
    name: "Travis",
    score: 3,
    id: 2
  },
  {
    name: "John",
    score: 12,
    id: 3
  },
  {
    name: "Joe",
    score: 31,
    id: 4
  }
];

//Capitalize the function name to specify a React component.
//props is the header array / arguement - title and totalPlayers are set in the app Component below and can be called whatever you want
const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name }
      </span>
      {/* A component containing another component is called "Composition" */}
      <Counter score = { props.score }/>  
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score"> { props.score } </span>
        <button className="counter-action increment"> + </button>
      </div>
  );
}


const App = (props) => {
  return (
    <div className="scoreboard">
    <Header 
    title="Scoreboard" 
    totalPlayers={ props.initialPlayers.length } 
    />
    {/* This returns the value of the "initialPlayers" array and creates each player */}
    { props.initialPlayers.map( player =>
      <Player
      name={ player.name }
      score={ player.score }
      key={ player.id.toString() }
      />
      )}
    </div>
  );
}

ReactDOM.render(
  //CAPITALIZED to refer to a React component and not an HTML Element.
  //Can be self closing if you don't have children.
  <App initialPlayers={ players }/>,
  document.getElementById('root')
)