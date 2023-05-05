import React from 'react'
import { TextField, Paper, Box, Button } from '@mui/material'
import axiosClient from '../../../setup/API/axios-client'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';
import { useState } from 'react';

const UpdateUser = ({ user, id, setUserId, setValue }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmaion] = useState('');

  const handleNom = (event) => {
    setNom(event.target.value);
  };
  const handlePrenom = (event) => {
    setPrenom(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleTel = (event) => {
    setTel(event.target.value);
  };
  const handleRole = (event) => {
    setRole(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmation = (event) => {
    setConfirmaion(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { nom, prenom, email, tel, role, password, confirmation };
    const data2 = Object.entries(data)
    const validData = data2.filter(([key, value]) => value !== '')

    const payload = Object.fromEntries(validData)
    console.log(payload)
    if (id) {
      axiosClient.put(`users/${id}`, payload).then((response) => {
        console.log(response)
        if (response.status === 200) {
          setUserId('')
          setValue(0)

        }
      }).catch((error) => {
        console.log(error)
      })
    }

  }
  return (

    <Paper sx={{ my: 2, width: '50%' }}>
      <Typography variant='h6' align='center' sx={{ p: 2 }}>{`Modifier utilisateur : ${user.nom} ${user.prenom} `}</Typography>
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
          id="nom"
          label="Nom"
          name='nom'
          // defaultValue={user.nom}
          onChange={handleNom}
        />
        <TextField
          required
          id="prenom"
          label="Prenom"
          name='prenom'
          placeholder='asdasd'
          onChange={handlePrenom}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          name='email'
          // defaultValue={user.email}
          autoComplete="email"
          onChange={handleEmail}
        />
        <TextField
          id="tel"
          label="Telephone"
          type="number"
          name="tel"
          // defaultValue={user.tel}
          onChange={handleTel}
        />
        <FormControl sx={{ m: 1, width: '50%' }} >
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            name='role'
            labelId="role-label"
            id="role"
            value={role}
            label="role"
            onChange={handleRole}
          >
            <MenuItem value={1}>Administrateur</MenuItem>
            <MenuItem value={2}>Archiviste</MenuItem>
            <MenuItem value={3}>Utilisateur</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          name='password'
          onChange={handlePassword}

        />
        <TextField
          id="password-confirmation"
          label="Confirmer mot de passe"
          name='password confirmation'
          type="password"
          onChange={handleConfirmation}

        />
        <Button type='submit' variant="outlined" color="primary" sx={{ m: 1, width: '50%' }}>Modifier</Button>
      </Box>
    </Paper >
  )
}

export default UpdateUser