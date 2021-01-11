import React from "react";
import PostCard from "./PostCard";

class SectionSkills extends React.Component {
  render() {
    return (
      <article>
        <br />
        <div className="titulo">
          <h2>Habilidades</h2>
          <hr />
        </div>
        <div className="columns">
          <div className="column" sm={4}>
            <PostCard />
          </div>
          <br />
          <div className="column" sm={4}>
            <PostCard />
          </div>
          <div className="column" sm={4}>
            <PostCard />
          </div>
          <div className="column" sm={4}>
            <PostCard />
          </div>
          <div className="column" sm={4}>
            <PostCard />
          </div>
        </div>
      </article>
    );
  }
}

export default SectionSkills;
