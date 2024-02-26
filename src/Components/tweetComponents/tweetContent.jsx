import { TweetActions } from './tweetActions'
import { TweetTitle } from './tweetTitle'

export function TweetContent ({TitleAuthor, TitleTag,TitleDate, TitleIcon, innerText, TweetImage, HasImage, Action}){
    return (
        <>
           <div className="tweet-content">
                <div className='tweet-body'>
                    <TweetTitle Autor={TitleAuthor} Tag={TitleTag} Date={TitleDate} Icon={TitleIcon}></TweetTitle>
                    <div className='tweet-text'>{innerText}</div>
                    {
                        HasImage ? <img className='tweet-image' src={TweetImage}></img> : null
                    }
                </div>
                <TweetActions Action={Action}></TweetActions>
            </div>
        </>
    )
}