import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const AddEmprunteur = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        axiosClient.post('/emprunteurs', data).then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Paper sx={{ my: 2, width: 500 }}>
            <Typography variant='h6' align='center' sx={{ p: 2 }}>Ajouter un nouveau emprunteur</Typography>
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
                    label="Nom"
                    required
                    id="nom"
                    name='nom'
                    defaultValue=""
                />
                <TextField
                    label="Prenom"
                    required
                    id="prenom"
                    name='prenom'
                    defaultValue=""
                /><TextField
                    label="Telephone"
                    required
                    id="tel"
                    name='tel'
                    defaultValue=""
                /><TextField
                    label="Type d'emprunteur"
                    required
                    id="type"
                    name='emprunteur'
                    defaultValue=""
                />
                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Ajouter</Button>
            </Box>
        </Paper >
    )
}

export default AddEmprunteur