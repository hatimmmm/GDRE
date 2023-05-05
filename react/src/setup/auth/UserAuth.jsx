import { useState } from "react"
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useStateContext } from "../context/contextProvider"
import axiosClient from "../API/axios-client"
import { useDispatch, useSelector } from "react-redux"

const UserAuth = ({ children }) => {

    const { currentUser } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useStateContext()
    const role = window.localStorage.getItem('USER_ROLE')
    useEffect(() => {
        axiosClient.get('/user').then(({ data }) => {
            dispatch(setCurrentUser(data))
        }).catch((error) => {
            console.log(error)
        })
        if (!token) {
            navigate('/')
            return
        }
        else if (currentUser && role !== '3') {
            navigate('/unothorized')
        }
        console.log(role)
    }, [])
    return children
}

export default UserAuth