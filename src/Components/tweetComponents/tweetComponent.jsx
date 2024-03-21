import { Link } from 'react-router-dom'
import tweetImage from '../tweetComponents/tweetAssets/Tweet-Image.png'
import Verified from '../tweetComponents/tweetAssets/Verified.png'
import { TweetContent } from './tweetContent'


export function TweetFragment({ innerText, Author, dtTag, dtDate, hasImage, Avatar, Action, link }) {
  return (
    <>
      <div className="tweet">
        <Link to={link}>
          <img className="tweet-avatar" src={Avatar}></img>
        </Link>
        <TweetContent TitleAuthor={Author} TitleDate={dtDate} TitleTag={dtTag} TitleIcon={Verified} innerText={innerText} TweetImage={tweetImage} HasImage={hasImage} Action={Action}></TweetContent>
      </div>
    </>
  )
}