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
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>X</button>
        { props.name }
      </span>
      {/* A component containing another component is called "Composition" */}
      <Counter />  
    </div>
  );
}

class Counter extends React.Component {
  ////This is the classic way
  // constructor() {
  //   super()
  //   this.state = {
  //     score: 0
  //   };
  // }

  state = {
    score: 0
  };

  //Created as an arrow function to bind it to the counter, otherwise THIS wouldn't work.
  incrementScore = () => {
    //SetState lets React know to rerender the UI to display changes.
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score -1
    }));
  }

  render(){
    return (
      <div className="counter">
          <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
          {/* classes need to access components with THIS, then regular expression. */}
          <span className="counter-score"> { this.state.score } </span>
          <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
        </div>
    );
  }
 }
 


class App extends React.Component {
//keys are only needed when itterating over an array of items that will be manually created or deleted / updated
  state = {
    player: [
      {
        name: "Trent",
        id: 1
      },
      {
        name: "Travis",
        id: 2
      },
      {
        name: "John",
        id: 3
      },
      {
        name: "Joe",
        id: 4
      }
    ]
  }

  removePlayer = (id) => {
    this.setState( prevState => {
      return {
        player: prevState.player.filter( p => p.id !== id )
      }
    });
  }

  render() {
    return (
      <div className="scoreboard">
      <Header 
      title="Scoreboard" 
      totalPlayers={ this.state.player.length } 
      />
  
      {/* This returns the value of the "players" array and creates each player */}
      {/* InitialPlayers is set in the ReactDOM.Render, not here */}
      { this.state.player.map( player =>
        <Player
        name={ player.name }
        id= { player.id }
        key={ player.id.toString() }
        removePlayer={ this.removePlayer }
        />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  //CAPITALIZED to refer to a React component and not an HTML Element.
  //Can be self closing if you don't have children.
  <App />,
  document.getElementById('root')
)

// APPLICATION STATE - Data that is available to the entire app - Lives in the app component and all children have access to it.

// COMPONENT STATE - State specific to a component, not shared outside of the component (Like Counter).