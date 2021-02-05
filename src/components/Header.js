import React from "react";
import loadable from '@loadable/component'

const AppBar = loadable (() => import ("./AppBar.js"))

export default function Header() {
    return(
    <AppBar />
    );
}

