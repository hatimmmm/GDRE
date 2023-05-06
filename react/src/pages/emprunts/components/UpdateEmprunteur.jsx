import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const UpdateEmprunteur = ({ Emprunteur }) => {

    //states
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [tel, setTel] = useState('')
    const [emprunteur, setEmprunteur] = useState('')

    const { emprunteurs } = useSelector((state) => state.emprunts)


    const handleEmprunteur = (e) => {
        setEmprunteur(e.target.value)
    }
    const handleNom = (e) => {
        setNom(e.target.value)
    }
    const handlePrenom = (e) => {
        setPrenom(e.target.value)
    }
    const handleTel = (e) => {
        setTel(e.target.value)
    }

    //submit

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = Emprunteur.id_emprunteur
        const data = { nom, prenom, tel, emprunteur };
        const data2 = Object.entries(data)
        const validData = data2.filter(([key, value]) => value !== '')

        const payload = Object.fromEntries(validData)
        console.log(payload)
        if (id) {
            axiosClient.put(`emprunteur/${id}`, payload).then((response) => {
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
        <Paper sx={{ my: 2, width: 500 }}>
            <Typography variant='h6' align='center' sx={{ p: 2 }}>{`modifier emprunteur: ${Emprunteur.nom} ${Emprunteur.prenom}`}</Typography>
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
                    onChange={handleNom}
                />
                <TextField
                    label="Prenom"
                    required
                    id="prenom"
                    name='prenom'
                    defaultValue=""
                    onChange={handlePrenom}

                /><TextField
                    label="Telephone"
                    required
                    id="tel"
                    name='tel'
                    defaultValue=""
                    onChange={handleTel}

                /><TextField
                    label="Type d'emprunteur"
                    required
                    id="type"
                    name='emprunteur'
                    defaultValue=""
                    onChange={handleEmprunteur}

                />
                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Enregister</Button>
            </Box>
        </Paper >
    )
}

export default UpdateEmprunteur