import React from "react"

function Food({favourite}){
  return <h1>I LIKE {favourite}</h1>
}

const foodILike = [{}]

function App() {
  return (
    <div className="App">
      <h2>hello~</h2>
      <Food favourite="kimchi"/>
      <Food favourite="grape"/>
      <Food favourite="choco"/>
      <Food favourite="cheeze"/>
    </div>
  );
}

export default App;
