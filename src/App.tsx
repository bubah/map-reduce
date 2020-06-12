import React, { useState } from 'react';

function App() {
  const [text, setText] = useState<string>('')
  return (
    <div className="App">
      <h1>MapReduce</h1>
      <textarea onChange={(e) => setText(e.target.value)} value={text}></textarea>
      <button onClick={() => mapReduce(text)}>Submit</button>
    </div>
  );
}

// Handle empty string in mapReduce

function mapReduce(inputString: string){
  alert(inputString)
}

export default App;
