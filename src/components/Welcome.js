import { useContext } from "react";
import state from "../state";

export default function Welcome({ user, ...props }) {
  const { setUser } = useContext(state);

  return (
    <div>
      <div>
        Welcome to the club <strong>{user.username}</strong>! You have
        successfully used the context api to manage your state
      </div>
      <div>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    </div>
  );
}
