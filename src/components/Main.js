import { useContext, useEffect, useState } from "react";
import state from "../state";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";

export default function Main(props) {
  const { user } = useContext(state);

  return (
    <main style={{ width: 600, margin: "20vh auto", textAlign: "center" }}>
      {user && <Welcome user={user} />}
      {!user && <LoginForm />}
    </main>
  );
}
