import React from "react";
import "./reset.css";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "drop-down-menu"
    };
  }

  handleClick = () => {
    if (this.state.menuStatus === "drop-down-menu-open") {
      this.setState({ menuStatus: "drop-down-menu-closed" });
    } else {
      this.setState({ menuStatus: "drop-down-menu-open" });
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <div>
              <li className="nav-title">Start Bootstrap</li>
            </div>
            <li className="menu-text">Services</li>
            <li className="menu-text">Portfolio</li>
            <li className="menu-text">About</li>
            <li className="menu-text">Team</li>
            <li className="menu-text">Contact</li>
            <li>
              <button onClick={this.handleClick} className="menu-button">
                MENU
                <img
                  src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"
                  alt="ham_menu"
                />
              </button>
            </li>
          </ul>
          <div className={this.state.menuStatus}>
            <button className="drop-down-button">SERVICES</button>
            <button className="drop-down-button">PORTFOLIO</button>
            <button className="drop-down-button">ABOUT</button>
            <button className="drop-down-button">TEAM</button>
            <button className="drop-down-button">CONTACT</button>
          </div>
        </nav>
        <header className="header">
          <h2 className="welcome">Welcome To Our Studio!</h2>
          <h3 className="nice">IT'S NICE TO MEET YOU</h3>
          <button className="button">TELL ME MORE</button>
        </header>
      </div>
    );
  }
}

export default App;
