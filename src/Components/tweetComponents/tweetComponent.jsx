import tweetImage from '../tweetComponents/tweetAssets/Tweet-Image.png'
import Verified from '../tweetComponents/tweetAssets/Verified.png'
import { TweetContent } from './tweetContent'


export function TweetFragment({innerText, Author, dtTag, dtDate, hasImage, Avatar}){
    return (
        <>
          <div className="tweet">
          <img className="tweet-avatar" src={Avatar}></img>
          <TweetContent TitleAuthor={Author} TitleDate={dtDate} TitleTag={dtTag} TitleIcon={Verified} innerText={innerText} TweetImage={tweetImage} HasImage={hasImage}></TweetContent>
          </div>
        </>
    )
}