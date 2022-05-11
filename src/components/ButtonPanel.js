import { Button, Stack } from '@mui/material';
import React from 'react';

const ButtonPanel = ({ updateResults }) => {
    return (
        <div style={{
            color: "white",
            width: "280px",
            height: "375px",
            zIndex: "1",
            // backgroundColor: "red",
            borderRadius: "15px",
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Stack direction={'row'} spacing={1}>
                <Stack direction={'column'} spacing={1}>
                    <Stack direction={'row'} spacing={1}>
                        <Button
                        onClick={updateResults}
                        value={'Clear'}
                        variant='contained'
                        size='large'
                        sx={{
                            width: "67%"
                        }}
                        >
                            Clear
                        </Button>
                        <Button
                        onClick={updateResults}
                        value={'*'}
                        variant='contained'
                        size='large'
                        >
                            *
                        </Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button onClick={updateResults} value={7} size='large'>7</Button>
                        <Button onClick={updateResults} value={8} size='large'>8</Button>
                        <Button onClick={updateResults} value={9} size='large'>9</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button onClick={updateResults} value={4} size='large'>4</Button>
                        <Button onClick={updateResults} value={5} size='large'>5</Button>
                        <Button onClick={updateResults} value={6} size='large'>6</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button onClick={updateResults} value={1} size='large'>1</Button>
                        <Button onClick={updateResults} value={2} size='large'>2</Button>
                        <Button onClick={updateResults} value={3} size='large'>3</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button
                        onClick={updateResults}
                        value={0}
                        sx={{
                            width: "100%"
                        }}
                        size='large'
                        >0</Button>
                    </Stack>
                </Stack>
                <Stack direction={'column'} spacing={1}>
                    <Button
                    onClick={updateResults}
                    value={"/"}
                    variant='contained'
                    size='large'
                    >
                        /
                    </Button>
                    <Button
                    onClick={updateResults}
                    value={'-'}
                    variant='contained'
                    size='large'
                    >
                        -
                    </Button>
                    <Button
                    onClick={updateResults}
                    value={'+'}
                    variant='contained'
                    size='large'
                    >
                        +
                    </Button>
                    <Button
                    onClick={updateResults}
                    value={'='}
                    variant='contained'
                    size='large'
                    sx={{
                        height: "40%"
                    }}
                    >
                        =
                    </Button>
                </Stack>
            </Stack>
        </div>
    );
}

export default ButtonPanel;