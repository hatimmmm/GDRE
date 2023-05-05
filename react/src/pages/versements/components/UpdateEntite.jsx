import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const UpdateEntite = ({ entiteVersante }) => {

    //states
    const [entite_versante, setEntiteVers] = useState('')
    const { entitesVersantes } = useSelector((state) => state.versements)


    const handleEntiteVers = (e) => {
        setEntiteVers(e.target.value)
    }

    //submit

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = entiteVersante.id
        const data = { entite_versante };
        const data2 = Object.entries(data)
        const validData = data2.filter(([key, value]) => value !== '')

        const payload = Object.fromEntries(validData)
        console.log(payload)
        if (id) {
            axiosClient.put(`entitesVersantes/${id}`, payload).then((response) => {
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
            <Typography variant='h6' align='center' sx={{ p: 2 }}>{`modifier entite versante: ${entiteVersante.entite_versante}`}</Typography>
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
                    defaultValue={entiteVersante.entite_versante}
                    onChange={handleEntiteVers}
                    sx={{ width: '75%' }}
                />
                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '25%' }}>Enregister</Button>
            </Box>
        </Paper >
    )
}

export default UpdateEntite