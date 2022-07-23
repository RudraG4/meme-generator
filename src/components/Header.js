import React from "react";

export default function Header() {
  return (
    <header className="meme-header">
      <nav>
        <img src="./images/logo.svg" alt="meme logo" className="meme-logo" />
        <h2>Meme Generator</h2>
        <p>React Course - Project 3</p>
      </nav>
    </header>
  );
}
