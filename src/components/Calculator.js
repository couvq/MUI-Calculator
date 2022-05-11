import React from 'react';
import ButtonPanel from './ButtonPanel';
import Results from './Results';

const Calculator = () => {

    return (
        <>
            <div style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}> 
                <div style={{
                    width: "320px",
                    height: "568px",
                    backgroundColor: "#121212",
                    borderRadius: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Results />
                    <ButtonPanel />
                </div>
            </div>
        </>
    );
}

export default Calculator;