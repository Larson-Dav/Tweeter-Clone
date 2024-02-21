import './App.css'

import { Header } from './Components/header'
import { TweetEditor } from './Components/tweet-editor'
import { Tweet } from './Components/tweet'


function App() {
  
  return (
    <>
      <div className='timeline'> 
        <Header>Home</Header>
        <TweetEditor buttonName='Tweets'></TweetEditor>
        <Tweet></Tweet>
      </div>
    </>
  )
}



export default App
