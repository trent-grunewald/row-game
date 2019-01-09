import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./commentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        pic={faker.image.avatar()}
        author="Travis"
        time="Yesterday at 2AM"
        comment="Durrrr, my name is Travis!"
      />
      <CommentDetail
        pic={faker.image.avatar()}
        author="Joe"
        time="Today at 7:30AM"
        comment="You're an idiot"
      />
      <CommentDetail
        pic={faker.image.avatar()}
        author="Rachel"
        time="Today at 9AM"
        comment="You're both idiots"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
