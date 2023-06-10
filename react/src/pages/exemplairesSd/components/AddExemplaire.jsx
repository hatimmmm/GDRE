import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

const AddExemplaire = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        axiosClient.post('/exemplairesSd', data).then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Paper sx={{ my: 2, width: '50%' }}>
            <Typography variant='h6' align='center' sx={{ p: 2 }}>Ajouter un nouveau exemplaire</Typography>
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
                    id="id-exemplaire"
                    label="ID exemplaire"
                    name='id_exemplaire'
                    defaultValue=""
                />
                <TextField
                    required
                    id="id-sous-dossier"
                    label="ID sous dossier"
                    name='id_sous_dossier'
                    defaultValue=""
                />
                <TextField
                    id="cote-topo"
                    label="Cote topographique"
                    name='cote_topo'
                />

                <FormControl>
                    <FormLabel id="exclu-du-pret">Exclu du pret</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="exclu_du_pret"
                    >
                        <FormControlLabel value='1' control={<Radio />} label="Oui" />

                        <FormControlLabel
                            value='0'
                            control={<Radio />}
                            label="Non"
                        />
                    </RadioGroup>
                </FormControl>
                <TextField
                    required
                    id="observation"
                    label="Observation"
                    name='observation'
                    defaultValue=""
                />
                <TextField
                    required
                    id="disponibilite"
                    label="Dis"
                    name='id_sous_dossier'
                    defaultValue=""
                />
                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Ajouter</Button>
            </Box>
        </Paper >
    )
}

export default AddExemplaire