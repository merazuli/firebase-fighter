import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import AboutUsPage from '../pages/AboutUsPage';
import HomePage from '../pages/HomePage';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/about-us",
                Component: AboutUsPage,
            },
            {
                path: "/Profile",
                Component: Profile,
            },
            {
                path: "/signup",
                Component: SignUp,
            },
            {
                path: "/signIn",
                Component: SignIn,
            }
        ]
    }
])