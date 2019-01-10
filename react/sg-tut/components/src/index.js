import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import Approval from "./Approval";

const App = () => {
  return (
    <div className="ui container comments">
      <Approval>
        <CommentDetail
          pic={faker.image.avatar()}
          author="Travis"
          time="Yesterday at 2AM"
          comment="Durrrr, my name is Travis!"
        />
      </Approval>
      <Approval>
        <CommentDetail
          pic={faker.image.avatar()}
          author="Joe"
          time="Today at 7:30AM"
          comment="You're an idiot"
        />
      </Approval>
      <Approval>
        <CommentDetail
          pic={faker.image.avatar()}
          author="Rachel"
          time="Today at 9AM"
          comment="You're both idiots"
        />
      </Approval>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
