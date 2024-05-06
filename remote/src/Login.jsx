import { useAccount, useLoggedIn } from "./store";

export const Login = () => {
  const [state, setState] = useAccount();
  const [, setLogIn] = useLoggedIn();

  return (
    <div>
      Login
      <input
        value={state.username}
        onChange={(e) =>
          setState({
            ...state,
            username: e.target.value,
          })
        }
      />
      Password
      <input
        value={state.password}
        onChange={(e) =>
          setState({
            ...state,
            password: e.target.value,
          })
        }
      />
      <button onClick={() => setLogIn(true)}>Log in</button>
    </div>
  );
};
