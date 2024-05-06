import "./App.css";

import { Login } from "./Login";
import { useLoggedIn } from "./store";

function App() {
  const [isLoggedIn] = useLoggedIn();
  return (
    <div className="App">
      <h1>Account Application</h1>
      {!isLoggedIn && <Login />}
    </div>
  );
}

export default App;
