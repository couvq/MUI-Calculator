import { Button, Stack } from '@mui/material';
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
            <Stack direction={'row'} spacing={1}>
                <Stack direction={'column'} spacing={1}>
                    <Stack direction={'row'} spacing={1}>
                        <Button
                        variant='contained'
                        sx={{
                            width: "67%"
                        }}
                        >
                            Clear
                        </Button>
                        <Button
                        variant='contained'
                        >
                            *
                        </Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button>7</Button>
                        <Button>8</Button>
                        <Button>9</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button>4</Button>
                        <Button>5</Button>
                        <Button>6</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Button
                        sx={{
                            width: "100%"
                        }}
                        >0</Button>
                    </Stack>
                </Stack>
                <Stack direction={'column'} spacing={1}>
                    <Button
                    variant='contained'
                    >
                        /
                    </Button>
                    <Button
                    variant='contained'
                    >
                        -
                    </Button>
                    <Button
                    variant='contained'
                    >
                        +
                    </Button>
                    <Button
                    variant='contained'
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