import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const AddEntite = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        axiosClient.post('/entitesVersantes', data).then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Paper sx={{ my: 2, width: 500 }}>
            <Typography variant='h6' align='center' sx={{ p: 2 }}>Ajouter une entite versante</Typography>
            <Box
                onSubmit={handleSubmit}
                component="form"
                display="flex"
                flexDirection='row'
                justifyContent='center'
                flexWrap="nowrap"
                sx={{
                    '& .MuiTextField-root': { m: 1, },
                }}
                noValidate
                autoComplete="on">
                <TextField
                    label="Entite versante"
                    required
                    id="entite_versante"
                    name='entite_versante'
                    defaultValue=""
                    sx={{ width: '75%' }}
                />
                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '25%' }}>Ajouter</Button>
            </Box>
        </Paper >
    )
}

export default AddEntite