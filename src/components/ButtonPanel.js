import { Button, Stack } from '@mui/material';
import React from 'react';

const ButtonPanel = () => {
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
                        variant='contained'
                        size='large'
                        sx={{
                            width: "67%"
                        }}
                        >
                            Clear
                        </Button>
                        <Button
                        variant='contained'
                        size='large'
                        >
                            *
                        </Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button size='large'>7</Button>
                        <Button size='large'>8</Button>
                        <Button size='large'>9</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button size='large'>4</Button>
                        <Button size='large'>5</Button>
                        <Button size='large'>6</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button size='large'>1</Button>
                        <Button size='large'>2</Button>
                        <Button size='large'>3</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button
                        sx={{
                            width: "100%"
                        }}
                        size='large'
                        >0</Button>
                    </Stack>
                </Stack>
                <Stack direction={'column'} spacing={1}>
                    <Button
                    variant='contained'
                    size='large'
                    >
                        /
                    </Button>
                    <Button
                    variant='contained'
                    size='large'
                    >
                        -
                    </Button>
                    <Button
                    variant='contained'
                    size='large'
                    >
                        +
                    </Button>
                    <Button
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