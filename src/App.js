function App() {
const name = 'Teo'
const x = false

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <h2>{x?'Yes':'No'}</h2>
    </div>
  );
}

export default App;
