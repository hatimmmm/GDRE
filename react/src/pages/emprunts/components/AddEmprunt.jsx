import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const AddEmprunt = () => {

    const { emprunteurs } = useSelector((state) => state.emprunts)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        axiosClient.post('/emprunts', data).then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Paper sx={{ my: 2, width: '50%' }}>
            <Typography variant='h6' align='center' sx={{ p: 2 }}>Ajouter un versement</Typography>
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
                    label="Date emprunt"
                    required
                    id="data_emprunt"
                    name='data_emprunt'
                    type="date"
                    defaultValue=""

                />
                <TextField
                    helperText="observation"
                    required
                    id="observation"
                    name='observation'
                    defaultValue=""
                    type="text"
                />
                <TextField
                    id="id_emprunteur"
                    select
                    label="id_emprunteur"
                    defaultValue=""
                    name='id_emprunteur'
                >
                    {emprunteurs.map((option) => (
                        <MenuItem key={option.id_emprunteur} value={option.id_emprunteur}>
                            {option.nom}
                        </MenuItem>
                    ))}
                </TextField>

                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Ajouter</Button>
            </Box>
        </Paper >
    )
}

export default AddEmprunt