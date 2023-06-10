import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container, IconButton } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState, useEffect } from 'react';
import axiosClient from '../../../setup/API/axios-client';
import { remEmprunteur } from '../../../store/slices/empruntsSlice';
import AddEmprunteur from './AddEmprunteur';
import UpdateEmprunteur from './UpdateEmprunteur';



export default function ListeEmprunteurs() {
    const { emprunteurs } = useSelector((state) => state.emprunts)
    const [idEmprunteur, setIdEmprunteur] = useState(null)
    const [emprunteur, setEmprunteur] = useState({})
    const [value, setValue] = useState(0);
    const dispatch = useDispatch()
    useEffect(() => {
        if (idEmprunteur) {
            axiosClient.get(`emprunteurs/${idEmprunteur}`).then(({ data }) => {
                console.log(data)
                setEmprunteur(data.data)
                handleChangeIndex(1)
            }).catch((error) => {
                console.log(error)
            })
        }

    }, [idEmprunteur])


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <Box

                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}


            >
                {value === index && (
                    <Box sx={{ display: "flex", justifyContent: "center", width: '100%', p: 3 }} >
                        {children}
                    </Box>
                )}
            </Box>
        );
    }
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    const onDelete = (id) => {
        axiosClient.delete(`/emprunteurs/${id}`).then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        dispatch(remEmprunteur(id))
    }

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper} sx={{ maxHeight: 400 }} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">ID emprunteur</TableCell>
                            <TableCell align="left">Nom</TableCell>
                            <TableCell align="left">Prenom</TableCell>
                            <TableCell align="left">Telephone</TableCell>
                            <TableCell align="left">Emprunteur</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emprunteurs.map((row) => (
                            <TableRow
                                key={row.id_emprunteur}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id_emprunteur}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.nom}
                                </TableCell><TableCell component="th" scope="row">
                                    {row.prenom}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.tel}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.emprunteur}
                                </TableCell>
                                <TableCell align="left"><IconButton color='primary' onClick={() => setIdEmprunteur(row.id_emprunteur)}><EditIcon /> </IconButton></TableCell>
                                <TableCell align="left"><IconButton onClick={() => { onDelete(row.id_emprunteur) }} color='error'><DeleteForeverIcon /></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab icon={<AddBoxIcon />} />
                    <Tab icon={<EditIcon />} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <AddEmprunteur />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <UpdateEmprunteur Emprunteur={emprunteur} />
                </TabPanel>
            </Box >
        </Container >
    );
}