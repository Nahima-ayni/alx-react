import './App.css';
import holbertonLogo from './holberton-logo.jpg';
import Notifications from './Notifications';


function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <div className="App-header">
          <img src={holbertonLogo} alt="holberton-logo" className='App-logo' />
          <h1>School dashboard</h1>
        </div>

        <div className="App-body">
          <p>Login to access the full dashboard</p>      
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <br />
          
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
          <br />
          
          <button type="submit">OK</button>
        </div>
        
        <div className="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </div>
      </div>
    </>
  )
}

export default App;