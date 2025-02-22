import React, { useState } from "react";
import "./App.css";
import background from "./assets/background.png";

const ClickableIcon = ({ src, altText, onClick }) => {
  return (
    <div className="iconContainer" onClick={onClick}>
      <img src={src} alt={altText} className="icon" />
      <span className="iconLabel">{altText}</span>
    </div>
  );
};

const App = () => {
  const [clicked, setClicked] = useState(null);

  const playGame = () => {
    alert("Play button clicked! Starting game...");
    setClicked("play");
  };

  const openSettings = () => {
    alert("Settings button clicked! Opening settings...");
    setClicked("settings");
  };

  const quitGame = () => {
    alert("Quit button clicked! Exiting game...");
    setClicked("quit");
  };

  const handleClick = (name) => {
    alert(`${name} button clicked!`);
  };

  return (
    <div className="body" style={{ backgroundImage: `url(${background})` }}>
      <div className="logo">
        <img src="logo.png" alt="logo" className="logoImg" />
        CODIGO Silo
      </div>

      <div className="menuContainer">
        <img
          src="play-button.png"
          alt="Play"
          className={clicked === "play" ? "menuButtonClicked" : "menuButton"}
          onClick={playGame}
        />

        <img
          src="settings-button.png"
          alt="Settings"
          className={clicked === "settings" ? "menuButtonClicked" : "menuButton"}
          onClick={openSettings}
        />

        <img
          src="quit-button.png"
          alt="Quit"
          className={clicked === "quit" ? "menuButtonClicked" : "menuButton"}
          onClick={quitGame}
        />
      </div>

      
      <div className="topRight">
        <ClickableIcon src="leaderboard-button.png" altText="Leaderboard" onClick={() => handleClick("Leaderboard")} />
        <ClickableIcon src="login-button.png" altText="Log in" onClick={() => handleClick("Log in")} />
        <ClickableIcon src="profile-card-button.png" altText="Profile & Card" onClick={() => handleClick("Profile & Card")} />
      </div>
    </div>
  );
};

export default App;
