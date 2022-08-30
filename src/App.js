import { useEffect } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    fetch('https://pieagency.pythonanywhere.com/project/api/v1/project/all/')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <MessengerCustomerChat pageId="111573024985274" appId="3955918857853286" />
    </div>
  );
}

export default App;
