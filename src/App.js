import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions} />
      <div className="flex-container">
        <div className="row">
          <div className="img-container flex-item">
            <img
              src="https://gravatar.com/avatar/a8d7b9b47f75adbd42c65a301c361e25?s=128&d=robohash&r=x"
              alt="Avatar"
            />
          </div>

          <h1 className="flex-item mt-3">Hi, I'm Ahsan <span>Ehtesham</span></h1>
          <h2 className="flex-item mt-2">I'm a React Developer.</h2>
          <div className="social mt-2">
            <div className="card">
              <div className="card-body">
                <a href="https://github.com/Ahsan-Ehtesham">
                  <i className="fab fa-github fa-3x"></i>
                </a>
                <a href="https://github.com/Ahsan-Ehtesham">
                  <i className="fab fa-facebook fa-3x"></i>
                </a>
                <a href="https://github.com/Ahsan-Ehtesham">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://github.com/Ahsan-Ehtesham">
                  <i className="fab fa-linkedin-in fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
