import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MyProfileLayout } from './LayoutComponents/myprofilelayout.jsx'
import { MainLayout } from './LayoutComponents/mainlayout.jsx'
import { TweetProfileLayout } from './LayoutComponents/tweetprofilelayout.jsx'
import { ErrorPage } from './LayoutComponents/errorpage.jsx'
import { Explore } from './LayoutComponents/explore.jsx'
import { Notifications } from './LayoutComponents/notifications.jsx'
import { PostTab } from './LayoutComponents/userTabs/posttab.jsx'
import { RepliesTab } from './LayoutComponents/userTabs/repliesTab.jsx'
import { HighLightsTab } from './LayoutComponents/userTabs/highlighttab.jsx'
import { MediasTab } from './LayoutComponents/userTabs/mediatab.jsx'
import { LikesTab } from './LayoutComponents/userTabs/liketab.jsx'

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
        children: [
          {
            path: "posts",
            element: <PostTab />
          },
          {
            path: "replies",
            element: <RepliesTab />
          },
          {
            path: "highlights",
            element: <HighLightsTab />
          },
          {
            path: "medias",
            element: <MediasTab />
          },
          {
            path: "likes",
            element: <LikesTab />
          }
        ]
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
