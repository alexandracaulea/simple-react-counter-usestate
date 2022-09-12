import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter initialCount={100} />
    </div>
  );
}

export default App;
