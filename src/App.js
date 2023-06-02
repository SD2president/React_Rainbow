import React, { useState } from 'react';
import './App.css';
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';


function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'green', 'greenyellow', 'yellow' , 'orange', 'red'])
  let colorMap = colors.map((colors,index) => {
    return (
      <ColorBlock key={index} color={colors}></ColorBlock>
    )
  })
  const addColor = (newColor) => {
    setColors([...colors,newColor])
  }
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;