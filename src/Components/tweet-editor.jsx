import profile from '../assets/Profile-Photo.png'
import actions from '../assets/Meta.png'
import { Link } from 'react-router-dom'

export function TweetEditor({ buttonName }) {
  return (
    <>
      <div className="tweet-editor">
        <Link to='/myprofile'>
          <img className="avatar" src={profile}></img>
        </Link>
        <div className='tweet-editor-form'>
          <input className='tweet-editor-input' type='text' placeholder="What's happening ?"></input>
          <div className='tweet-editor-buttons'>
            <img src={actions} className='tweet-editor-actions'></img>
            <button className='button'>{buttonName}</button>
          </div>
        </div>
      </div>
    </>
  )
}