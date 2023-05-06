import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArchiveIcon from '@mui/icons-material/Archive';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import LogoutIcon from '@mui/icons-material/Logout';
import axiosClient from '../../../../setup/API/axios-client';
import { setCurrentUser, setUsers } from '../../../../store/slices/usersSlice';
import { useDispatch } from 'react-redux';



export const MainListItems = () => {

    return (<React.Fragment>
        <Link className='dashboard-link' to='/admin-dashboard'>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <Link className='dashboard-link' to='users'>
            <ListItemButton>
                <ListItemIcon>
                    <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Dossiers" />
            </ListItemButton>
        </Link>
        <Link className='dashboard-link' to='users'>
            <ListItemButton>
                <ListItemIcon>
                    <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText primary="Exemplaire" />
            </ListItemButton>
        </Link>
        <Link className='dashboard-link' to='emprunts'>
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Emprunts" />
            </ListItemButton>
        </Link>
        <Link className='dashboard-link' to='versements'>
            <ListItemButton>
                <ListItemIcon>
                    <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Versements" />
            </ListItemButton>
        </Link>
        <Link className='dashboard-link' to='users'>
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Utilisateurs" />
            </ListItemButton>
        </Link>


    </React.Fragment>)
}



export const SecondaryListItems = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = () => {
        axiosClient.post('/logout').then(({ response }) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        dispatch(setCurrentUser(''))
        window.localStorage.removeItem('ACCESS_TOKEN')
        navigate('/')

    }
    return (
        <React.Fragment>
            <ListItemButton onClick={logout}>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Se deconnecter" />
            </ListItemButton>
        </React.Fragment>
    )
}
