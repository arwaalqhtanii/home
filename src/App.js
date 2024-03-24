import logo from './logo.svg';
import './App.css';

function App() {
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
    </div>
  );
}


export default function signInFormDesktop() {
  return (
    <div className="sign-in-form-desktop">
      <div className="rectangle-2756">
      </div>
      <div className="f1">
        <div className="f2">
          <div className="logo">
            <div className="avatar">
            </div>
          </div>
          <div className="t-logo">
            UI Unicorn
          </div>
        </div>
        <div className="sign-in">
          <div className="f3">
            <div className="welcom">
              Nice to see you again
            </div>
            <div className="f4">
              <div className="input-configurator">
                <div className="satellite-input">
                  <span className="login">
                    Login
                  </span>
                </div>
                <div className="login-input">
                  <div className="regular-input-double-row">
                    <span className="email-or-phone-number">
                      Email or phone number
                    </span>
                  </div>
                </div>
              </div>
              <div className="input-configurator-4">
                <div className="satellite-input-5">
                  <span className="password">
                    Password
                  </span>
                </div>
                <div className="password-input">
                  <div className="regular-input-double-row-7">
                    <span className="enter-password">
                      Enter password
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-2">
            Forgot password?
          </div>
          <div className="primary-button-40-px">
            <span className="dis">
              Sign in
            </span>
          </div>
          <div className="sign-up-offer">
            <span className="description">
              Dont have an account?
            </span>
            <span className="description-1">
              Sign up now
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
