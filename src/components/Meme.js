import React from "react";

export default function Meme(props) {
  const { config } = props;
  const topTextStyle = { WebkitTextFillColor: config.topTextColor };
  const bottomTextStyle = { WebkitTextFillColor: config.bottomTextColor };

  topTextStyle["fontSize"] = `${config.topTextFontSize}px`;
  topTextStyle["left"] = `${config.topTextPositionLeft}%`;
  topTextStyle["top"] = `${config.topTextPositionTop}%`;

  bottomTextStyle["fontSize"] = `${config.bottomTextFontSize}px`;
  bottomTextStyle["left"] = `${config.bottomTextPositionLeft}%`;
  bottomTextStyle["top"] = `${config.bottomTextPositionTop}%`;

  return (
    <div className="meme-container">
      <img
        src={config.url}
        alt={config.name || "meme"}
        className="meme-image"
      />
      <h2 className="meme-text top-text" style={topTextStyle}>
        {config.topText}
      </h2>
      <h2 className="meme-text bottom-text" style={bottomTextStyle}>
        {config.bottomText}
      </h2>
    </div>
  );
}
