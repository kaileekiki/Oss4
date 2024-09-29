import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Button from './Button.js';
import './Button.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Hello />
        <Button />
        <p>
          Edit <code>src/App.js</code> 22300593 LeeJiKwang
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
