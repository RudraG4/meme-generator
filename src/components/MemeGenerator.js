import React, { useState, useEffect } from "react";
import Meme from "./Meme";

export default function MemeGenerator() {
  const memeApi = "https://api.imgflip.com/get_memes";
  const [meme, setMeme] = useState({
    url: "",
    name: "",
    topText: "",
    bottomText: "",
    topTextColor: "#ffffff",
    bottomTextColor: "#ffffff",
    topTextFontSize: 40,
    bottomTextFontSize: 40,
    topTextPositionTop: 0,
    topTextPositionLeft: 50,
    bottomTextPositionTop: 80,
    bottomTextPositionLeft: 50
  });
  const [memesList, setMemesList] = useState([]);

  useEffect(() => {
    fetch(memeApi)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          let { memes } = data.data;
          setMemesList(memes);
          if (memes.length) {
            setMeme((previousMeme) => {
              return {
                ...previousMeme,
                url: memes[0]["url"],
                name: memes[0]["name"]
              };
            });
          }
        }
      });
  }, []);

  function generateMeme() {
    const index = Math.floor(Math.random() * memesList.length);
    setMeme((previousMeme) => {
      return {
        ...previousMeme,
        url: memesList[index]["url"],
        name: memesList[index]["name"]
      };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((previousMeme) => {
      return { ...previousMeme, [name]: value };
    });
  }

  function handleClear(event) {
    setMeme((previousMeme) => {
      return {
        ...previousMeme,
        topText: "",
        bottomText: "",
        topTextColor: "#ffffff",
        bottomTextColor: "#ffffff"
      };
    });
  }

  function toggleOptions(event) {
    event.target.nextSibling.classList.toggle("option-active");
  }

  return (
    <main className="meme-main">
      <div className="meme-form">
        <div className="meme-floating-label meme-form-group">
          <input
            type="text"
            name="topText"
            className="form-input"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="color"
            className="form-input"
            name="topTextColor"
            onChange={handleChange}
            value={meme.topTextColor}
          />
          <label htmlFor="topText" className="meme-form-label">
            Top Text
          </label>
        </div>
        <div className="meme-floating-label meme-form-group">
          <input
            type="text"
            name="bottomText"
            className="form-input"
            onChange={handleChange}
            value={meme.bottomText}
          />
          <input
            type="color"
            className="form-input"
            name="bottomTextColor"
            onChange={handleChange}
            value={meme.bottomTextColor}
          />
          <label htmlFor="bottomText" className="meme-form-label">
            Bottom Text
          </label>
        </div>
        <div className="meme-more-settings">
          <div className="meme-more-settings-tab" onClick={toggleOptions}>
            More Options
          </div>
          <div className="meme-more-settings-options">
            <div className="meme-flex meme-flex-row meme-form-group">
              <label htmlFor="topTextFontSize" className="meme-form-label">
                Font Size
              </label>
              <input
                type="range"
                className="form-input"
                min="16"
                max="40"
                name="topTextFontSize"
                value={meme.topTextFontSize}
                onChange={handleChange}
                step="1"
              />
              <span>{meme.topTextFontSize}px</span>
            </div>
            <div className="meme-flex meme-flex-row meme-form-group">
              <label htmlFor="topTextPositionTop" className="meme-form-label">
                Top
              </label>
              <input
                type="range"
                className="form-input"
                min="0"
                max="100"
                name="topTextPositionTop"
                value={meme.topTextPositionTop}
                onChange={handleChange}
                step="1"
              />
              <span>{meme.topTextPositionTop || 0}%</span>
            </div>
            <div className="meme-flex meme-flex-row meme-form-group">
              <label htmlFor="topTextPositionLeft" className="meme-form-label">
                Left
              </label>
              <input
                type="range"
                className="form-input"
                min="0"
                max="100"
                name="topTextPositionLeft"
                value={meme.topTextPositionLeft}
                onChange={handleChange}
                step="1"
              />
              <span>{meme.topTextPositionLeft || 0}%</span>
            </div>
          </div>
        </div>
        <div className="meme-more-settings">
          <div className="meme-more-settings-tab" onClick={toggleOptions}>
            More Options
          </div>
          <div className="meme-more-settings-options">
            <div className="meme-flex meme-flex-row meme-form-group">
              <label htmlFor="bottomTextFontSize" className="meme-form-label">
                Font Size
              </label>
              <input
                type="range"
                className="form-input"
                min="16"
                max="40"
                name="bottomTextFontSize"
                value={meme.bottomTextFontSize}
                onChange={handleChange}
                step="1"
              />
              <span>{meme.bottomTextFontSize}px</span>
            </div>
            <div className="meme-flex meme-flex-row meme-form-group">
              <label
                htmlFor="bottomTextPositionTop"
                className="meme-form-label"
              >
                Top
              </label>
              <input
                type="range"
                className="form-input"
                min="0"
                max="100"
                name="bottomTextPositionTop"
                value={meme.bottomTextPositionTop}
                onChange={handleChange}
                step="1"
              />
              <span>{meme.bottomTextPositionTop || 0}%</span>
            </div>
            <div className="meme-flex meme-flex-row meme-form-group">
              <label
                htmlFor="bottomTextPositionLeft"
                className="meme-form-label"
              >
                Left
              </label>
              <input
                type="range"
                className="form-input"
                min="0"
                max="100"
                name="bottomTextPositionLeft"
                value={meme.bottomTextPositionLeft}
                onChange={handleChange}
                step="1"
              />
              <span>{meme.bottomTextPositionLeft || 0}%</span>
            </div>
          </div>
        </div>
        <button className="meme-genbtn primary" onClick={generateMeme}>
          Generate a meme image
        </button>
        <button className="meme-genbtn default" onClick={handleClear}>
          Clear
        </button>
      </div>
      {meme.url && <Meme config={meme} />}
    </main>
  );
}
