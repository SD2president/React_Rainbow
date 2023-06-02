import React, { useState } from "react";

export default function ColorForm({addColor}) {
  let [input, setInput] = useState("");

  const onSubmitForm = e => {
    e.preventDefault();
    addColor(input)
    e.target.reset()
  }

  return (
    <div className="colorForm">
      <form onSubmit={onSubmitForm}>
        <input type="text" 
        onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">Submit!!</button>
      </form>
    </div>
  );
}
