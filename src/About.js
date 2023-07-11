import './App.css';
import Navbar from "./Navbar";
import logo from './logo.svg';

export default function About() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        <p>
          This is About.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Swaraj
        </a>
      </header>
    </div>
    )
}