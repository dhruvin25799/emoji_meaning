import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "๐": "Smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐ฆนโโ๏ธ": "Supervillain Woman",
  "โค๏ธ": "Red Heart",
  "โจ": "Sparkles",
  "๐": "Christmas Tree",
  "๐ฅ": "Fire",
  "๐": "Face with Tears of Joy",
  "๐ฅบ": "Pleading Face",
  "๐ฅฐ": "Smiling Face with Hearts",
  "โ๏ธ": "Check Mark"
};
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState();

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning(
        "This emoji is not in our dictionary, please contact Dhruvin with the meaning to update it."
      );
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji App</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {}
      <h3> {meaning} </h3> {}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
