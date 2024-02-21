import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Header } from './Components/header'
import { TweetEditor } from './Components/tweet-editor'
import { Tweet } from './Components/tweet'

const todos = ['java', 'kotlin', 'julia']


function App() {
  const [count, setCount] = useState(0)

  const couner = () => {
    setCount(count + 1)
  }
  
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
