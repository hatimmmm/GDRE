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
import AddVersement from './AddVersement';
import { useDispatch, useSelector } from 'react-redux';
import UpdateVersement from './UpdateVersement';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState, useEffect } from 'react';
import axiosClient from '../../../setup/API/axios-client';
import { remVersement } from '../../../store/slices/versementsSlice';

export default function ListeVersements() {
    const { versements } = useSelector((state) => state.versements)
    const [numVersement, setNumVersement] = useState(null)
    const [versement, setVersement] = useState({})

    const dispaatch = useDispatch()
    useEffect(() => {
        if (numVersement) {
            axiosClient.get(`versements/${numVersement}`).then(({ data }) => {
                console.log(data)
                setVersement(data)
            }).catch((error) => {
                console.log(error)
            })
        }
        handleChangeIndex(1)

    }, [numVersement])

    const [value, setValue] = useState(0);

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
        axiosClient.delete(`/versements/${id}`).then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        dispatch(remVersement(id))
    }

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper} sx={{ maxHeight: 400 }} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>num versement</TableCell>
                            <TableCell align="left">id entité versante</TableCell>
                            <TableCell align="left">date versement</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {versements.map((row) => (
                            <TableRow
                                key={row.num_versement}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.num_versement}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.id_entite_versante}
                                </TableCell>
                                <TableCell align="left">{row.date_versement}</TableCell>
                                <TableCell align="left"><IconButton color='primary' onClick={() => setNumVersement(row.num_versement)}><EditIcon /> </IconButton></TableCell>
                                <TableCell align="left"><IconButton onClick={() => { onDelete(row.num_versement) }} color='error'><DeleteForeverIcon /></IconButton></TableCell>
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
                    <AddVersement />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <UpdateVersement versement={versement} />
                </TabPanel>
            </Box >
        </Container >
    );
}
