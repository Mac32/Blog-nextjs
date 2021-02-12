import React from "react";
import dynamic from 'next/dynamic'

const AppBar = dynamic(import ("./AppBar"))

export default function Header() {
    return(
      <>
    <AppBar />
</>
    );
}

