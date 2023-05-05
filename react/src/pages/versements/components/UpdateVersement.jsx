import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const UpdateVersement = ({ versement }) => {

    //states

    const [num_versement, setNumVers] = useState('')
    const [date_versement, setDateVers] = useState('')
    const [id_entite_versante, setentiteVers] = useState('')
    const { entitesVersantes } = useSelector((state) => state.versements)

    const handleNumVers = (e) => {
        setNumVers(e.target.value)
    }
    const handleDateVers = (e) => {
        setDateVers(e.target.value)
    }
    const handleEntiteVers = (e) => {
        setEntiteVers(e.target.value)
    }

    //submite

    const handleSubmit = (event) => {
        event.preventDefault();
        const num = versement.num_versement
        const data = { num_versement, date_versement, id_entite_versante };
        const data2 = Object.entries(data)
        const validData = data2.filter(([key, value]) => value !== '')

        const payload = Object.fromEntries(validData)
        console.log(payload)
        if (num) {
            axiosClient.put(`versements/${num}`, payload).then((response) => {
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
            <Typography variant='h6' align='center' sx={{ p: 2 }}>{`modifier versement num: ${versement.num_versement}`}</Typography>
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
                    onChange={handleNumVers}

                />
                <TextField
                    helperText="Date versement"
                    required
                    id="date_versement"
                    name='date_versement'
                    defaultValue=""
                    type="date"
                    onChange={handleDateVers}

                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Entites versantes"
                    defaultValue=""
                    name='id_entite_versante'
                    onChange={handleEntiteVers}

                >
                    {entitesVersantes.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.entite_versante}
                        </MenuItem>
                    ))}
                </TextField>

                <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Enregister</Button>
            </Box>
        </Paper >
    )
}

export default UpdateVersement