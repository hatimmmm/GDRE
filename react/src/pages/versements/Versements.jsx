import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import ListeVersements from './components/ListeVersements';
import ListeEntites from './components/ListeEntites';
import axiosClient from '../../setup/API/axios-client';
import { setVersements, setEntites } from '../../store/slices/versementsSlice';
import { useDispatch } from 'react-redux';
const Versements = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        axiosClient.get('/versements').then(({ data }) => {
            dispatch(setVersements(data.data))
        }).catch((error) => {
            console.log(error)
        })
        axiosClient.get('/entitesVersantes').then(({ data }) => {
            dispatch(setEntites(data.data))
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    //TABS

    const [value, setValue] = React.useState(0);
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

    //TABS

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="versement" />
                <Tab label="entités versantes" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <ListeVersements />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListeEntites />
            </TabPanel>
        </Box >
    )
}

export default Versements