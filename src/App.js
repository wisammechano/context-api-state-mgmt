import { StateProvider } from "./state";
import Main from "./components/Main";
function App() {
  return (
    <StateProvider>
      <Main />
    </StateProvider>
  );
}

export default App;
