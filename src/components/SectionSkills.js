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
          <div class="column" sm={4}>
            <PostCard />
          </div>
          <br />
          <div class="column" sm={4}>
            <PostCard />
          </div>
          <div class="column" sm={4}>
            <PostCard />
          </div>
          <div class="column" sm={4}>
            <PostCard />
          </div>
          <div class="column" sm={4}>
            <PostCard />
          </div>
        </div>
      </article>
    );
  }
}

export default SectionSkills;
