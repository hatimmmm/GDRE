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
import { remEmprunt } from '../../../store/slices/empruntsSlice';
import UpdateEmprunt from './UpdateEmprunt';
import AddEmprunt from './AddEmprunt';

export default function ListeEmprunts() {
    const { emprunts } = useSelector((state) => state.emprunts)
    const [idEmprunt, setIdEmprunt] = useState(null)
    const [emprunt, setEmprunt] = useState({})
    const [value, setValue] = useState(0);

    const dispatch = useDispatch()
    useEffect(() => {
        if (idEmprunt) {
            axiosClient.get(`emprunts/${idEmprunt}`).then(({ data }) => {
                setEmprunt(data)
                handleChangeIndex(1)

            }).catch((error) => {
                console.log(error)
            })
        }

    }, [idEmprunt])


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
        axiosClient.delete(`/emprunts/${id}`).then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        dispatch(remEmprunt(id))
    }

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper} sx={{ maxHeight: 400 }} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID emprunt</TableCell>
                            <TableCell align="left">Date emprunt</TableCell>
                            <TableCell align="left">observation</TableCell>
                            <TableCell align="left">id_imprunteur</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emprunts.map((row) => (
                            <TableRow
                                key={row.id_emprunt}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id_emprunt}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.date_emprunt}
                                </TableCell>
                                <TableCell align="left">{row.oservation}</TableCell>
                                <TableCell align="left">{row.id_emprunteur}</TableCell>
                                <TableCell align="left"><IconButton color='primary' onClick={() => setIdEmprunt(row.id_emprunt)}><EditIcon /> </IconButton></TableCell>
                                <TableCell align="left"><IconButton onClick={() => { onDelete(row.id_emprunt) }} color='error'><DeleteForeverIcon /></IconButton></TableCell>
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
                    <AddEmprunt />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <UpdateEmprunt emprunt={emprunt} />
                </TabPanel>
            </Box >
        </Container >
    );
}
