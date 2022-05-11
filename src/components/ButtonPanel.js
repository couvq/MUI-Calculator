import { Button } from '@mui/material';
import React from 'react';

const ButtonPanel = () => {
    return (
        <div style={{
            color: "white",
            width: "280px",
            height: "375px",
            zIndex: "1",
            backgroundColor: "red",
            borderRadius: "15px",
            marginBottom: "2rem"
        }}>
            <div style={{
                display: "flex",
                gap: "1rem",
                width: "100%"
            }}>
                <Button 
                sx={{
                    width: "50%"
                }}
                variant='contained'
                >Clear</Button>
                <Button variant='contained'>*</Button>
                <Button variant='contained'>/</Button>
            </div>
        </div>
    );
}

export default ButtonPanel;