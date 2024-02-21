import tweetImage from '../tweetComponents/tweetAssets/Tweet-Image.png'
import tweetReplies from '../tweetComponents/tweetAssets/Tweet-Replies.png'
import tweetReplies1 from '../tweetComponents/tweetAssets/Tweet-Replies1.png'
import tweetReplies2 from '../tweetComponents/tweetAssets/Tweet-Replies2.png'
import tweetReplies3 from '../tweetComponents/tweetAssets/Tweet-Replies3.png'
import Verified from '../tweetComponents/tweetAssets/Verified.png'

export function TweetFragment({innerText, Author, dtTag, dtDate, hasImage, Avatar}){
    return (
        <>
          <div className="tweet">
          <img className="tweet-avatar" src={Avatar}></img>
            <div className="tweet-content">
                <div className='tweet-body'>
                    <div className='tweet-title'>
                        <p className='tweet-title-author'>{Author} <img  src={Verified}></img></p>
                        <p className='tweet-title-details'>{dtTag} </p>
                        <p className='tweet-title-details'>.</p>
                        <p className='tweet-title-details'>{dtDate}</p>
                    </div>
                    <div className='tweet-text'>{innerText}</div>
                    {
                        hasImage ? <img className='tweet-image' src={tweetImage}></img> : null
                    }
                    <div className='tweet-actions'>
                        <img className='tweet-action' src={tweetReplies}></img>
                        <img className='tweet-action' src={tweetReplies1}></img>
                        <img className='tweet-action' src={tweetReplies2}></img>
                        <img className='tweet-action' src={tweetReplies3}></img>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}