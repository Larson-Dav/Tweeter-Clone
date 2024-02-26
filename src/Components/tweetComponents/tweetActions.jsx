import  msgImg  from './tweetAssets/msg.png'
import  likeImg  from './tweetAssets/like.png'
import  replieImg  from './tweetAssets/replie.png'
import  uploadImg  from './tweetAssets/upload.png'
import { ActionItem } from './tweetActionItems'



export function TweetActions({Action}){
    return (
        <>
           <div className='tweet-actions'>
                <ActionItem icon={msgImg} msg={Action.msg} hasText={true}></ActionItem>
                <ActionItem icon={replieImg} msg={Action.replie} hasText={true}></ActionItem>
                <ActionItem icon={likeImg} msg={Action.like} hasText={true}></ActionItem>
                <ActionItem icon={uploadImg} msg={null} hasText={false}></ActionItem>
           </div>
        </>
    )
}