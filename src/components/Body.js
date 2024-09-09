import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
    const approuter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);
    
  return (
    <div>
        <RouterProvider router = {approuter} />
    </div>
  )
}

export default Body