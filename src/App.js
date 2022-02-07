import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./styles.css";

//Helen yau dummy data to test out search on

const items = [
  "Ebook",
  "Chat-bot",
  "Quiz Game_Maths",
  "Quiz game_Eng_Vowel",
  "Goal Tracker",
  "Review"
];

export default function App() {
  //Helen Yau at every occurance of the change event
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const results = items.filter((items) =>
      items.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  //Helen Yau props < items along with SearchTerm in dependency

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onchange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement);

/*helen yau search bar*/
