import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const UpdateEmprunt = ({ emprunt }) => {

    //states
    const [date_emprunt, setDateEmprunt] = useState('')
    const [observation, setObservation] = useState('')
    const [id_emprunteur, setIdEmprunteur] = useState('')

    const { emprunteurs } = useSelector((state) => state.emprunts)

    const handleDateEmprunt = (e) => {
        setDateEmprunt(e.target.value)
    }
    const handleObservation = (e) => {
        setObservation(e.target.value)
    }
    const handleIdEmprunteur = (e) => {
        setIdEmprunteur(e.target.value)
    }

    //submite

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = emprunt.id_emprunt
        const data = { date_emprunt, observation, id_emprunteur };
        const data2 = Object.entries(data)
        const validData = data2.filter(([key, value]) => value !== '')

        const payload = Object.fromEntries(validData)
        console.log(payload)
        if (id) {
            axiosClient.put(`emprunts/${id}`, payload).then((response) => {
                console.log(response)
                // if (response.status === 200) {
                //     setUserId('')
                //     setValue(0)

                // }
            }).catch((error) => {
                console.log(error)
            })
        }

    }

    return (
        <Paper sx={{ my: 2, width: '50%' }}>
            <Typography variant='h6' align='center' sx={{ p: 2 }}>{`modifier emprunt num: ${emprunt.id_emprunt}`}</Typography>
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
                    onChange={handleDateEmprunt}

                />
                <TextField
                    helperText="observation"
                    required
                    id="observation"
                    name='observation'
                    defaultValue=""
                    type="text"
                    onChange={handleObservation}

                />
                <TextField
                    id="id_emprunteur"
                    select
                    label="id_emprunteur"
                    defaultValue=""
                    name='id_emprunteur'
                    onChange={handleIdEmprunteur}

                >
                    {emprunteurs.map((option) => (
                        <MenuItem key={option.id_emprunteur} value={option.id_emprunteur}>
                            {option.nom}
                        </MenuItem>
                    ))}
                </TextField>

                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Enregister</Button>
            </Box>
        </Paper >
    )
}

export default UpdateEmprunt