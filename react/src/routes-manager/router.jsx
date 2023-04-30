import React from 'react'
import { createBrowserRouter, } from 'react-router-dom'
import SignIn from '../pages/login/Login'
import ArchivisteLayout from '../layouts/ArchivisteLayout'
import UserLayout from '../layouts/UserLayout'
import AdminLayout from '../layouts/AdminLayout'
import Unothorized from '../pages/unauthorized/Unothorized'
import ArchivisteAuth from '../setup/auth/ArchivisteAuth'
import AdminAuth from '../setup/auth/AdminAuth'
import UserAuth from '../setup/auth/UserAuth'



export const router = createBrowserRouter([
    {
        'path': '/',
        'element': <SignIn />,
    },
    {
        "path": "/admin-dashboard",
        "element": <AdminAuth><AdminLayout /></AdminAuth>
    },
    {
        "path": "/archiviste-dashboard",
        "element": <ArchivisteAuth><ArchivisteLayout /></ArchivisteAuth>
    },
    {
        "path": "/user-dashboard",
        "element": <UserAuth><UserLayout /></UserAuth>
    },
    {
        "path": "/unothorized",
        "element": <Unothorized />
    },


])

