import React, { useState } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  textarea: {
    width: "80%",
    height: "10rem",
    padding: "1rem",
    marginBottom: "1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "3px",
    resize: "none",
  },
  wordCount: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
};

function WordCounter() {
  const [text, setText] = useState("");
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div style={styles.container}>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Enter your text here"
        value={text}
        onChange={handleChange}
        style={styles.textarea}
      />
      <p style={styles.wordCount}>
        Word count: <strong>{wordCount}</strong>
      </p>
    </div>
  );
}

export default WordCounter;