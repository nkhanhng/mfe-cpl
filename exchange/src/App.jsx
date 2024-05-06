import "./App.css";

import useCount from "./store";

function App() {
  const [count, setCount] = useCount();

  return (
    <div className="App">
      <h1>Exchange Application</h1>
    </div>
  );
}

export default App;
