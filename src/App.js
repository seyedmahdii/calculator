import React from "react";
import "./App.css";

function App() {
    return (
        <div className="app">
            <div className="container">
                <main className="content">
                    <header className="input-container">
                        <input type="number" className="input" />
                    </header>

                    <div className="keyboard">
                        <div className="row">
                            <button className="btn btn-clear">C</button>
                            <button className="btn btn-colored">()</button>
                            <button className="btn btn-colored">%</button>
                            <button className="btn btn-colored">÷</button>
                        </div>

                        <div className="row">
                            <button className="btn">7</button>
                            <button className="btn">8</button>
                            <button className="btn">9</button>
                            <button className="btn btn-colored">×</button>
                        </div>

                        <div className="row">
                            <button className="btn">4</button>
                            <button className="btn">5</button>
                            <button className="btn">6</button>
                            <button className="btn btn-colored">-</button>
                        </div>

                        <div className="row">
                            <button className="btn">1</button>
                            <button className="btn">2</button>
                            <button className="btn">3</button>
                            <button className="btn btn-colored">+</button>
                        </div>

                        <div className="row">
                            <button className="btn">+/-</button>
                            <button className="btn">0</button>
                            <button className="btn">.</button>
                            <button className="btn btn-fill">=</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
