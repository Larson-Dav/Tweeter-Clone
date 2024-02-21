
import ta from '../tweetComponents/tweetAssets/m3.png'
import tb from '../tweetComponents/tweetAssets/m5.png'
import tc from '../tweetComponents/tweetAssets/m10.png'
import td from '../tweetComponents/tweetAssets/m4.png'
import te from '../tweetComponents/tweetAssets/m6.png'
import tf from '../tweetComponents/tweetAssets/m11.png'
import tg from '../tweetComponents/tweetAssets/m1.png'
import th from '../tweetComponents/tweetAssets/m7.png'
import ti from '../tweetComponents/tweetAssets/m12.png'
import tj from '../tweetComponents/tweetAssets/m2.png'
import tk from '../tweetComponents/tweetAssets/m9.png'
import tl from '../tweetComponents/tweetAssets/m13.png'
import upload from '../tweetComponents/tweetAssets/m17.png'
import { ActionItems } from './tweetActionItems'

const actionsCollection = [
    {
        msg: ta,
        square: tb,
        love: tc,
        upload: upload
    },{
        msg: td,
        square: te,
        love: tf,
        upload: upload
    },{
        msg: tg,
        square: th,
        love: ti,
        upload: upload
    },{
        msg: tj,
        square: tk,
        love: tl,
        upload: upload
    }
]

export function TweetActions({Type}){
    return (
        <>
           <div className='tweet-actions'>
                {
                    Type == 'cnn' ? <>
                        <ActionItems msg={actionsCollection[0].msg} square={actionsCollection[0].square} love={actionsCollection[0].love} upload={actionsCollection[0].upload}></ActionItems>
                    </> : Type == 'gard' ? <>
                        <ActionItems msg={actionsCollection[1].msg} square={actionsCollection[0].square} love={actionsCollection[0].love} upload={actionsCollection[0].upload}></ActionItems>
                    </> : Type == 'big' ? <>
                        <ActionItems msg={actionsCollection[2].msg} square={actionsCollection[0].square} love={actionsCollection[0].love} upload={actionsCollection[0].upload}></ActionItems>
                    </> : Type == 'tw' ? <>
                        <ActionItems msg={actionsCollection[3].msg} square={actionsCollection[0].square} love={actionsCollection[0].love} upload={actionsCollection[0].upload}></ActionItems>
                    </> : null
                }
           </div>
        </>
    )
}