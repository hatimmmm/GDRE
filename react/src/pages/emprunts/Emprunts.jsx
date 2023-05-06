import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import ListeVersements from './components/ListeEmprunts';
import ListeEntites from './components/ListeEmprunteurs';
import axiosClient from '../../setup/API/axios-client';
import { useDispatch } from 'react-redux';
import { setEmprunteurs, setEmprunts } from '../../store/slices/empruntsSlice';
import ListeEmprunts from './components/ListeEmprunts';
import ListeEmprunteurs from './components/ListeEmprunteurs';
const Emprunts = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        axiosClient.get('/emprunts').then(({ data }) => {
            dispatch(setEmprunts(data.data))
        }).catch((error) => {
            console.log(error)
        })
        axiosClient.get('/emprunteurs').then(({ data }) => {
            dispatch(setEmprunteurs(data.data))
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
                <Tab label="Emprunts" />
                <Tab label="Emprunteurs" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <ListeEmprunts />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ListeEmprunteurs />
            </TabPanel>
        </Box >
    )
}

export default Emprunts