import React, { useEffect, useState } from 'react'
import axiosClient from '../setup/API/axios-client';
import { Button } from '@mui/material';



const AdminLayout = () => {

    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        axiosClient
            .get("/user")
            .then(({ data }) => {
                setCurrentUser(data);
            })
            .then(() => { console.log(currentUser) })
            .catch((err) => {
                localStorage.removeItem("ACCESS_TOKEN");
                console.log(err);
            });
    }, []);

    const removeToken = () => {
        window.localStorage.removeItem('ACCESS_TOKEN')
    }
    return (
        <div>{currentUser.nom}
            <Button
                onClick={removeToken}
            >
                Click me
            </Button>
        </div>
    )
}

export default AdminLayout