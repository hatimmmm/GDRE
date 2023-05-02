import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axiosClient from '../../setup/API/axios-client';
import { Navigate, redirect, Outlet } from "react-router-dom";
import { useStateContext } from '../../setup/context/contextProvider';
import { unstable_composeClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();

    const { setUser, setToken } = useStateContext()
    const handleSubmit = (event) => {
        event.preventDefault();
        window.localStorage.removeItem('ACCESS_TOKEN');
        const data = new FormData(event.currentTarget);
        axiosClient
            .post("/login", data)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                const role = data.user.roles[0].id
                console.log(role)
                switch (role) {
                    case 1:
                        navigate("/admin-dashboard")
                        break
                    case 2:
                        navigate('/achiviste-dashboard')
                        break
                    case 3:
                        navigate('/user-dashboard')
                        break
                    default:
                        navigate('/')
                        break
                }
            })
            .catch((err) => {
                console.log(err);
                // const response = err.response;
                // if (response && response.status === 422) {
                //     if (response.data.errors) {
                //         // setErrors(response.data.errors);
                //     } else {
                //         // setErrors({ email: [response.data.message] });
                //     }
                // }
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}

                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}