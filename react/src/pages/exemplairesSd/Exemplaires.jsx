import React from 'react'
import AddUser from './components/AddExemplaire'
import { useEffect } from 'react'
import axiosClient from '../../setup/API/axios-client'
import { useDispatch } from 'react-redux'
import { setUsers } from '../../store/slices/usersSlice'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react'
import UsersList from './components/ExemplairesList'
import UpdateUser from './components/UpdateUser'
import { setExemplaires } from '../../store/slices/dossiersSlice'


const Exemplaires = () => {

    const [exId, setExId] = useState('')
    const [exemplaire, setExemplaire] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        axiosClient.get('/exemplairesSousDossier').then(({ data }) => {
            dispatch(setExemplaires(data.data))
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        if (exId) {
            axiosClient.get(`/exemplairesSousDossier${exId}`).then(({ data }) => {
                setExemplaire(data.data)
                handleChangeIndex(2)
            }).catch((error) => {
                console.log(error)
            })
        }


    }, [exId])




    const theme = useTheme();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
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


    return (

        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Exemplaires" />
                <Tab label="Ajouter" />
                {exId ? (<Tab label="Modifier" />) : (<Tab label="Modifier" disabled />)}

            </Tabs>
            <TabPanel value={value} index={0}>
                <UsersList setExId={setExId} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AddUser />
            </TabPanel>
            <TabPanel value={value} index={2}>
                {/* <UpdateUser exemplaire={exemplaire} setUserId={handleChangeIndex} id={exId} setValue={setValue} /> */}
            </TabPanel>

        </Box >


    );

};
export default Exemplaires