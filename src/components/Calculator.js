import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Results from './Results';

const Calculator = () => {

    const [results, setResults] = useState("");

    const upDateCalculation = (e) => {
        const value = e.target.value;
        if(value === "Clear") {
            setResults("") 
            return; 
        }
        // empty string on clear
        if(value === "=") {
            let newResults = eval(results);
            setResults(newResults);
            return;
        }
        // don't add an operation if results.length > 0
        if(value === '+' || value === '-' || value === '*' || value === '/') {
            if(results.length > 0) {
               setResults(results.concat(value));
               return;
            } else {
                return;
            }
        }
        // otherwise it is a number so concatenate
        setResults(results.concat(value));
    }

    return (
        <>
            <div style={{ // styling to center the actual calulator in screen
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}> 
                <div style={{ // styling for calculator itself
                    width: "320px",
                    height: "568px",
                    backgroundColor: "#121212",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-end"
                }}>
                    <Results results={results}/>
                    <ButtonPanel updateResults={upDateCalculation}/>
                </div>
            </div>
        </>
    );
}

export default Calculator;