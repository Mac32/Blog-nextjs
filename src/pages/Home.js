import React, { Component } from "react";
import Section from "../components/Section.js";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <Section />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
