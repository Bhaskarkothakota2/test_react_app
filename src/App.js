import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>This {process.env.REACT_APP_ID}</h1>
    </div>
  );
}

export default App;
