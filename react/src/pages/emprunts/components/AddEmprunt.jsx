import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const AddEmprunt = () => {

    const { emprunteurs } = useSelector((state) => state.emprunts)
    const { exemplaires } = useSelector((state) => state.dossiers)

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
        <Paper sx={{ my: 2, width: 500 }}>
            <Typography variant='h6' align='center' sx={{ p: 2 }}>Ajouter un emprunt</Typography>
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
                    id="id_exemplaire"
                    select
                    label="ID exemplaire"
                    defaultValue=""
                    name='id_exemplaire'
                >
                    {exemplaires.map((option) => (
                        <MenuItem key={option.id_exemplaire} value={option.id_exemplaire}>
                            {option.id_exemplaire}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="id_emprunteur"
                    select
                    label="ID emprunteur"
                    defaultValue=""
                    name='id_emprunteur'
                >
                    {emprunteurs.map((option) => (
                        <MenuItem key={option.id_emprunteur} value={option.id_emprunteur}>
                            {`${option.nom} ${option.prenom}`}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Duree pret"
                    required
                    id="duree_pret"
                    name='duree_pret'
                    type="number"
                    defaultValue=""

                />
                <TextField
                    helperText="Date emprunt"
                    required
                    id="date_emprunt"
                    name='date_emprunt'
                    type="date"
                    defaultValue=""
                />
                <TextField
                    helperText="Date retour prevue"
                    required
                    id="date_retour_prevue"
                    name='date_retour_prevu'
                    type="date"
                    defaultValue=''
                />
                <TextField
                    label="observation"
                    required
                    id="observation"
                    name='observation'
                    defaultValue=""
                    type="text"
                />


                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Ajouter</Button>
            </Box>
        </Paper >
    )
}

export default AddEmprunt