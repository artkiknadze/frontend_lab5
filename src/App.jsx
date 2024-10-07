import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Завдання 1</h1>
        <button id="button_task1" />
      </div>

      <div className="container">
        <h1>Завдання 2</h1>
        <div className="square" id="square_task2"></div>
      </div>

      <div className="container">
        <h1>Завдання 3</h1>
        <div className="square" id="square_task3"></div>
      </div>

      <div className="container">
        <h1>Завдання 4</h1>
        <div className="square" id="square_task4"></div>
      </div>

      <div className="container">
        <h1>Завдання 5</h1>
        <div className="square" id="square_task5"></div>
      </div>
    </div>
  );
};

export default App;
