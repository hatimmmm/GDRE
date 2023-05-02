import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';

const AddForm = () => {
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        axiosClient.post('/users', data).then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Paper sx={{ my: 2, width: '50%' }}>
            <Typography variant='h6' align='center' sx={{ p: 2 }}>Ajouter nouveau utilisateur</Typography>
            <Box
                onSubmit={handleSubmit}
                component="form"
                display="flex"
                flexDirection='column'
                justifyContent='center'
                flexWrap="nowrap"
                sx={{
                    '& .MuiTextField-root': { m: 1, },
                }}
                noValidate
                autoComplete="on">
                <TextField
                    required
                    id="nom"
                    label="Nom"
                    name='nom'
                    defaultValue=""
                />
                <TextField
                    required
                    id="prenom"
                    label="Prenom"
                    name='prenom'
                    defaultValue=""
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    name='email'
                    autoComplete="email"
                />
                <TextField
                    id="tel"
                    label="Telephone"
                    type="number"
                    name='tel'
                />
                <FormControl sx={{ m: 1, width: '50%' }} >
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        name='role'
                        labelId="role-label"
                        id="role"
                        value={role}
                        label="role"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Administrateur</MenuItem>
                        <MenuItem value={2}>Archiviste</MenuItem>
                        <MenuItem value={3}>Utilisateur</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="outlined-password-input"
                    label="Mot de passe"
                    type="password"
                    name='password'
                />
                <TextField
                    id="password-confirmation"
                    label="Confirmer mot de passe"
                    name='password confirmation'
                    type="password"
                />
                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Ajouter</Button>
            </Box>
        </Paper >
    )
}

export default AddForm