import  msgImg  from './tweetAssets/msg.png'
import  likeImg  from './tweetAssets/like.png'
import  replieImg  from './tweetAssets/replie.png'
import  uploadImg  from './tweetAssets/upload.png'
import { ActionItem } from './tweetActionItems'



export function TweetActions({Action}){
    const actionComponent = [
        {img: msgImg, msg: Action.msg, text: true}, 
        {img: replieImg, msg: Action.replie, text: true}, 
        {img: likeImg, msg: Action.like, text: true}, 
        {img: uploadImg, msg: null, text: false}
    ]
    return (
        <>
           <div className='tweet-actions'>
            {
                actionComponent.map(function(action){
                    return <> 
                        <ActionItem icon={action.img} msg={action.msg} hasText={action.text}></ActionItem>
                    </>
                })
            }
           </div>
        </>
    )
}