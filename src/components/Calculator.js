import React from 'react';
import ButtonPanel from './ButtonPanel';
import Results from './Results';

const Calculator = () => {

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
                    <Results results={"Results"}/>
                    <ButtonPanel />
                </div>
            </div>
        </>
    );
}

export default Calculator;