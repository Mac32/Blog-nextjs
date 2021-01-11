import React from "react";
import PostCard from "./PostCard.js";

class SectionProject extends React.Component {
  render() {
    return (
      <article className="sectionProject">
        <div className="titulo">
          <h2>Proyectos</h2>
          <hr />
        </div>
        <div className="columns">
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
          <div className="column" sm={4}>
            <PostCard />
          </div>
        </div>
      </article>
    );
  }
}

export default SectionProject;
