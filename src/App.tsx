import { useMeQuery } from "./components/Auth";

function App() {
  const me = useMeQuery();

  console.log(me);

  return <div className="App">hello react app</div>;
}

export default App;
