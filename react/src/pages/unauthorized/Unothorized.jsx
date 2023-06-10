import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const Unothorized = () => {
    return (
        <Container >
            <Box sx={{ width: '100%', height: '100vh', display: 'grid', placeItems: 'center' }}>
                <Typography sx={{ fontSize: 80 }}>
                    non autorisé
                </Typography>
            </Box>
        </Container>
    )
}

export default Unothorized