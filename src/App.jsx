import './App.css'
import './boon.css'

import { Header } from './Components/header'
import { TweetEditor } from './Components/tweet-editor'
import { Tweet } from './Components/tweet'
import { Sidebar } from './TrendsComponents/sidebar'
import { Trends } from './TrendsComponents/trend'


function App() {
  return (
    <>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className='timeline'>
        <Header>Home</Header>
        <TweetEditor buttonName='Tweets'></TweetEditor>
        <Tweet></Tweet>
      </div>
      <div>
        <Trends Class='Trends'></Trends>
      </div>
    </>
  )
}

export default App
