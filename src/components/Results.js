import { Typography } from '@mui/material';
import React from 'react';

const Results = ({results}) => {

    return (
        <div style={{
            color: "white",
            marginBottom: "3rem",
            marginRight: "1rem",
            alignSelf: "flex-end"
        }}>
            <Typography variant='h3'>{ results }</Typography>
        </div>
    );
}

export default Results;