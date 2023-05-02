import React from 'react'
import { createBrowserRouter, } from 'react-router-dom'
import SignIn from '../pages/login/Login'
import ArchivisteLayout from '../layouts/archiviste-layout/ArchivisteLayout'
import UserLayout from '../layouts/user-layout/UserLayout'
import AdminLayout from '../layouts/admin-layout/AdminLayout'
import Unothorized from '../pages/unauthorized/Unothorized'
import ArchivisteAuth from '../setup/auth/ArchivisteAuth'
import AdminAuth from '../setup/auth/AdminAuth'
import UserAuth from '../setup/auth/UserAuth'
import Users from '../pages/users/Users'



export const router = createBrowserRouter([
    {
        'path': '/',
        'element': <SignIn />,
    },
    {
        "path": "/admin-dashboard",
        "element": <AdminAuth><AdminLayout /></AdminAuth>,
        "children": [
            {
                "path": "users",
                "element": <Users />
            }
        ]
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

