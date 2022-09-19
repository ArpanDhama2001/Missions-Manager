function App() {
  return (
    <div className="App bg-primary h-screen">
      <h1 className="text-3xl text-primary">main</h1>
      <h1 className="text-lg text-primary-muted">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        fuga excepturi aperiam dolore{" "}
        <span className="text-accent">quidem</span> rem accusamus consequuntur
        modi dolor ex.
      </h1>
      <button className="bg-accent hover:bg-accent-muted">btn</button>
      <button className="bg-accent-muted text-primary">btn</button>
    </div>
  );
}

export default App;
