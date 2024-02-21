import tweetReplies from '../tweetComponents/tweetAssets/Tweet-Replies.png'
import tweetReplies1 from '../tweetComponents/tweetAssets/Tweet-Replies1.png'
import tweetReplies2 from '../tweetComponents/tweetAssets/Tweet-Replies2.png'
import tweetReplies3 from '../tweetComponents/tweetAssets/Tweet-Replies3.png'
import { TweetActions } from './tweetActions'
import { TweetTitle } from './tweetTitle'

export function TweetContent ({TitleAuthor, TitleTag,TitleDate, TitleIcon, innerText, TweetImage, HasImage}){
    return (
        <>
           <div className="tweet-content">
                <div className='tweet-body'>
                    <TweetTitle Autor={TitleAuthor} Tag={TitleTag} Date={TitleDate} Icon={TitleIcon}></TweetTitle>
                    <div className='tweet-text'>{innerText}</div>
                    {
                        HasImage ? <img className='tweet-image' src={TweetImage}></img> : null
                    }
                    <TweetActions Aaction={tweetReplies} Baction={tweetReplies1} Caction={tweetReplies2} Daction={tweetReplies3}></TweetActions>
                </div>
            </div>
        </>
    )
}