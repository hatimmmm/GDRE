import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/contextProvider'

const LoginAuth = ({ children }) => {
    const token = window.localStorage.getItem('ACCESS_TOKEN')
    const role = window.localStorage.getItem('USER_ROLE')
    const navigate = useNavigate()
    React.useEffect(() => {
        if (token) {
            switch (role) {
                case '1':
                    navigate("/admin-dashboard")
                    break
                case '2':
                    navigate('/achiviste-dashboard')
                    break
                case '3':
                    navigate('/user-dashboard')
                    break
                default:
                    navigate('/')
                    break
            }
        }
    }, [])

    return children
}

export default LoginAuth