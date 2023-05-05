import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const AddVersement = () => {

    const { entitesVersantes } = useSelector((state) => state.versements)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        axiosClient.post('/versements', data).then(({ response }) => {
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
                    label="num versement"
                    required
                    id="date_versement"
                    name='num_versement'
                    defaultValue=""

                />
                <TextField
                    helperText="Date versement"
                    required
                    id="date_versement"
                    name='date_versement'
                    defaultValue=""
                    type="date"
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Entites versantes"
                    defaultValue=""
                    name='id_entite_versante'
                >
                    {entitesVersantes.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.entite_versante}
                        </MenuItem>
                    ))}
                </TextField>

                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Ajouter</Button>
            </Box>
        </Paper >
    )
}

export default AddVersement