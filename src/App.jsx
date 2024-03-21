import './App.css'
import './boon.css'

import { Header } from './Components/header'
import { TweetEditor } from './Components/tweet-editor'
import { Tweet } from './Components/tweet'
import { Sidebar } from './TrendsComponents/sidebar'
import { Trends } from './TrendsComponents/trend'
import { MainLayout } from './LayoutComponents/mainlayout'
import { Link, Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className='timeline'>
        <Outlet />
      </div>
      <div>
        <Trends Class='Trends'></Trends>
      </div>
    </>
  )
}

export default App
