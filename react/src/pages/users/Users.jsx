import React from 'react'
import AddUser from './components/AddUser'
import { Divider, Table } from '@mui/material'
import { useEffect } from 'react'
import axiosClient from '../../setup/API/axios-client'
import { useDispatch } from 'react-redux'
import { setUsers } from '../../store/slices/usersSlice'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system'
import { useState } from 'react'
import UsersList from './components/UsersList'
import axios from 'axios'
import UpdateUser from './components/UpdateUser'


const Users = () => {

    const [userId, setUserId] = useState('')
    const [user, setUser] = useState({})
    const dispatch = useDispatch()


    useEffect(() => {
        if (userId) {
            axiosClient.get(`users/${userId}`).then(({ data }) => {
                setUser(data.data)
            }).catch((error) => {
                console.log(error)
            })
        }
        handleChangeIndex(2)

    }, [userId])

    useEffect(() => {
        axiosClient.get('/users').then(({ data }) => {
            dispatch(setUsers(data.data))
        }).catch((error) => {
            console.log(error)
        })
        handleChangeIndex(0)
    }, [])


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
                <Tab label="Utilisateurs" />
                <Tab label="Ajouter" />
                {userId ? (<Tab label="Modifier" />) : (<Tab label="Modifier" disabled />)}

            </Tabs>
            <TabPanel value={value} index={0}>
                <UsersList setUserId={setUserId} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AddUser />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <UpdateUser user={user} setUserId={handleChangeIndex} id={userId} setValue={setValue} />
            </TabPanel>

        </Box >


    );

};
export default Users