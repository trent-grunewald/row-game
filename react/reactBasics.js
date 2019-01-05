// Anatomy of a Component

// Class Post extends to React Component
class Post extends React.Component {
  state = {
    title: 'Post One',
    body: 'This is my Post'
  }

  //Render method, only REQUIRED component method
  render() {
    //Returns JSX { }
    return (
      <div>
        {/* //State comes from the class State */}
        <h3>{ this.state.title }</h3>
        <p>{ this.state.body }</p>
      </div>
    )
  }
}