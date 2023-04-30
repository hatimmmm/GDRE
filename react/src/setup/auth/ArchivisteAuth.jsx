import { useState } from "react"
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useStateContext } from "../context/contextProvider"
import axiosClient from "../API/axios-client"

const ArchivisteAuth = ({ children }) => {

    const navigate = useNavigate()
    const { user, token, setUser } = useStateContext()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        axiosClient
            .get("/user")
            .then(({ data }) => {
                setUser(data)
            })
            .catch((err) => {
                localStorage.removeItem("ACCESS_TOKEN");
                console.log(err);
            });
        setTimeout(() => {
            if (!token) {
                navigate('/')
                return
            }
            else if (user.roles[0].id !== 2) {
                navigate('/unothorized')
            }
        }, 2000);
    })


    return children
}

export default ArchivisteAuth