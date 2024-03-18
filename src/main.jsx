import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MyProfileLayout } from './LayoutComponents/myprofilelayout.jsx'
import { MainLayout } from './LayoutComponents/mainlayout.jsx'
import { TweetProfileLayout } from './LayoutComponents/tweetprofilelayout.jsx'
import { ErrorPage } from './LayoutComponents/errorpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <MainLayout />
      },
      {
        path: "/myprofile",
        element: <MyProfileLayout />,

      },
      {
        path: "profil/:username",
        element: <TweetProfileLayout />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
