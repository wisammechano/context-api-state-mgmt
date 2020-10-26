import { useContext, useRef, useState } from "react";
import state from "../state";

export default function LoginForm(props) {
  // Here we will read only our dispatch function from the state
  const { setUser } = useContext(state);

  // We can still use local state for local data
  const [error, setError] = useState(null);

  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do your login logic...
    const loggedIn = passwordInput.current.value === "test";

    if (loggedIn) {
      setUser({
        name: "Jane Doe",
        username: usernameInput.current.value,
        age: 26,
      });

      setError(null);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>{error && <span style={{ color: "red" }}>{error}</span>}</div>
      <div>
        {error && (
          <span>
            Use <b>test</b> for password with any username
          </span>
        )}
      </div>
      <div style={{ margin: "50px 0 20px 0" }}>
        <label htmlFor="username">Username</label>
        <input
          ref={usernameInput}
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          ref={passwordInput}
          type="password"
          id="password"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
}
