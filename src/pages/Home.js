import React, { Component } from "react";

import dynamic from 'next/dynamic'

const Section = dynamic(import('../components/Section'))

class Home extends Component {
  render() {
    return (
            <Section />
    );
  }
}

export default Home;
