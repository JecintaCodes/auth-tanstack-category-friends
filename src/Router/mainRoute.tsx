import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/auth/Register'
import SignIn from '../pages/auth/SignIn'
import HomePage from '../pages/Screen/HomePage'
import PrivateRoute from './privateRoute'
import Layout from '../Components/common/Layout'
import CreateArticle from '../pages/screen/CreateArticle'
import ViewAuthor from '../pages/Screen/ViewAuthors'

export const mainRouter = createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/",
        element: <PrivateRoute>
            <Layout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                index: true,
                path: "/create-article",
                element: <CreateArticle />,
            },
            {
                index: true,
                path: "/view-authors",
                element: <ViewAuthor />,
            }
        ]
    }
])