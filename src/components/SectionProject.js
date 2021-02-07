import React from "react";
import dynamic from 'next/dynamic'

const PostCard = dynamic(import( "./PostCard"))

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
