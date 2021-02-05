import React, { Component } from "react";

import loadable from '@loadable/component'

const Section = loadable (() => import('../components/Section'))

class Home extends Component {
  render() {
    return (
            <Section />
    );
  }
}

export default Home;
