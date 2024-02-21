import tweetImage from '../tweetComponents/tweetAssets/Tweet-Image.png'
import tweetReplies from '../tweetComponents/tweetAssets/Tweet-Replies.png'
import tweetReplies1 from '../tweetComponents/tweetAssets/Tweet-Replies1.png'
import tweetReplies2 from '../tweetComponents/tweetAssets/Tweet-Replies2.png'
import tweetReplies3 from '../tweetComponents/tweetAssets/Tweet-Replies3.png'
import Verified from '../tweetComponents/tweetAssets/Verified.png'
import { TweetActions } from './tweetActions'
import { TweerTitle } from './tweetTitle'

export function TweetFragment({innerText, Author, dtTag, dtDate, hasImage, Avatar}){
    return (
        <>
          <div className="tweet">
          <img className="tweet-avatar" src={Avatar}></img>
            <div className="tweet-content">
                <div className='tweet-body'>
                    <TweerTitle Autor={Author} Tag={dtTag} Date={dtDate} Icon={Verified}></TweerTitle>
                    <div className='tweet-text'>{innerText}</div>
                    {
                        hasImage ? <img className='tweet-image' src={tweetImage}></img> : null
                    }
                    <TweetActions Aaction={tweetReplies} Baction={tweetReplies1} Caction={tweetReplies2} Daction={tweetReplies3}></TweetActions>
                </div>
            </div>
          </div>
        </>
    )
}