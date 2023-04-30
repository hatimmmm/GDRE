import { useState } from "react"
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useStateContext } from "../context/contextProvider"
import axiosClient from "../API/axios-client"

const AdminAuth = ({ children }) => {

    const navigate = useNavigate()
    const { user, token, setUser } = useStateContext()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        axiosClient
            .get("/user")
            .then(({ data }) => {
                setUser(data)
            })
            .catch(({ response }) => {
                if (response.status === 401) {
                    localStorage.removeItem("ACCESS_TOKEN");
                    navigate('/')
                }
            });
        setTimeout(() => {
            if (!token) {
                navigate('/')
                return
            }
            else if (user.roles[0].id !== 1) {
                navigate('/unothorized')
            }
        }, 2000);
    })


    return children
}

export default AdminAuth