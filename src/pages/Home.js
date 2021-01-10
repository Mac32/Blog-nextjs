import React, { Component } from "react";
import Section from "../components/Section.js";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="columns isdesktop">
          <div class="column">            
            <Section />
          </div>
        </div> 
      </div>
    );
  }
}

export default Home;
