import logo from './logo.svg';
import './App.css';

export default function Contact() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contact Here.
        </p>
        <a
          className="App-link"
          href="https://github.com/swarajgosavi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Swaraj
        </a>
      </header>
    </div>
    )
}