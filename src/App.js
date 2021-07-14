import React, { useState } from "react";
import "./App.css";

function App() {
    const [result, setResult] = useState("");
    const [operator, setOperator] = useState("");
    let data;

    const calculate = () => {
        if (operator === "div") {
            data = result.split("÷");
            setResult(data[0] / data[1]);
        } else if (operator === "mul") {
            data = result.split("×");
            setResult(data[0] * data[1]);
        } else if (operator === "sub") {
            data = result.split("-");
            setResult(data[0] - data[1]);
        } else if (operator === "add") {
            data = result.split("+");
            setResult(Number(data[0]) + Number(data[1]));
        } else if (operator === "perc") {
            data = result.split("%");
            setResult((Number(data[0]) * Number(data[1])) / 100);
        }
        setOperator("");
    };

    const handleOperators = (optr) => {
        if (optr === "div") {
            operator
                ? setResult(replaceAt(result, result.length - 1, "÷"))
                : setResult(result + "÷");
        } else if (optr === "mul") {
            operator
                ? setResult(replaceAt(result, result.length - 1, "×"))
                : setResult(result + "×");
        } else if (optr === "sub") {
            operator
                ? setResult(replaceAt(result, result.length - 1, "-"))
                : setResult(result + "-");
        } else if (optr === "add") {
            operator
                ? setResult(replaceAt(result, result.length - 1, "+"))
                : setResult(result + "+");
        } else if (optr === "perc") {
            operator
                ? setResult(replaceAt(result, result.length - 1, "%"))
                : setResult(result + "%");
        }
        setOperator(optr);
    };

    const replaceAt = (str, index, replacement) => {
        return (
            str.substr(0, index) +
            replacement +
            str.substr(index + replacement.length)
        );
    };

    const handleNeg = () => {
        if (!result) {
            setResult("-");
        } else if (result === "-") {
            setResult("");
        } else if (!operator && result && result[0] !== "-") {
            setResult("-" + result);
        } else if (!operator && result && result[0] === "-") {
            setResult(result.replace("-", ""));
        } else if (operator) {
            setResult(replaceAt(result, result.length, "-"));
        }
    };

    return (
        <div className="container">
            <main className="content">
                <header className="input-container">
                    <input
                        type="text"
                        className="input"
                        value={result}
                        onChange={(e) => setResult(e.target.value)}
                    />
                </header>

                <div className="keyboard">
                    <div className="row">
                        <button
                            className="btn btn-clear"
                            onClick={() => {
                                setResult("");
                                setOperator("");
                            }}
                        >
                            C
                        </button>
                        <button className="btn btn-colored">()</button>
                        <button
                            className="btn btn-colored"
                            onClick={() => handleOperators("perc")}
                        >
                            %
                        </button>
                        <button
                            className="btn btn-colored"
                            onClick={() => handleOperators("div")}
                        >
                            ÷
                        </button>
                    </div>

                    <div className="row">
                        <button
                            className="btn"
                            onClick={() => setResult(result + 7)}
                        >
                            7
                        </button>
                        <button
                            className="btn"
                            onClick={() => setResult(result + 8)}
                        >
                            8
                        </button>
                        <button
                            className="btn"
                            onClick={() => setResult(result + 9)}
                        >
                            9
                        </button>
                        <button
                            className="btn btn-colored"
                            onClick={() => handleOperators("mul")}
                        >
                            ×
                        </button>
                    </div>

                    <div className="row">
                        <button
                            className="btn"
                            onClick={() => setResult(result + 4)}
                        >
                            4
                        </button>
                        <button
                            className="btn"
                            onClick={() => setResult(result + 5)}
                        >
                            5
                        </button>
                        <button
                            className="btn"
                            onClick={() => setResult(result + 6)}
                        >
                            6
                        </button>
                        <button
                            className="btn btn-colored"
                            onClick={() => handleOperators("sub")}
                        >
                            -
                        </button>
                    </div>

                    <div className="row">
                        <button
                            className="btn"
                            onClick={() => setResult(result + 1)}
                        >
                            1
                        </button>
                        <button
                            className="btn"
                            onClick={() => setResult(result + 2)}
                        >
                            2
                        </button>
                        <button
                            className="btn"
                            onClick={() => setResult(result + 3)}
                        >
                            3
                        </button>
                        <button
                            className="btn btn-colored"
                            onClick={() => handleOperators("add")}
                        >
                            +
                        </button>
                    </div>

                    <div className="row">
                        <button className="btn" onClick={() => handleNeg()}>
                            +/-
                        </button>
                        <button
                            className="btn"
                            onClick={() => setResult(result + 0)}
                        >
                            0
                        </button>
                        <button
                            className="btn"
                            onClick={() => {
                                result[result.length - 1] === "."
                                    ? setResult(
                                          replaceAt(
                                              result,
                                              result.length - 1,
                                              "."
                                          )
                                      )
                                    : setResult(result + ".");
                            }}
                        >
                            .
                        </button>
                        <button className="btn btn-fill" onClick={calculate}>
                            =
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
