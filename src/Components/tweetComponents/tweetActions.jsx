export function TweetActions({Aaction, Baction,Caction,Daction}){
    return (
        <>
           <div className='tweet-actions'>
                <img className='tweet-action' src={Aaction}></img>
                <img className='tweet-action' src={Baction}></img>
                <img className='tweet-action' src={Caction}></img>
                <img className='tweet-action' src={Daction}></img>
           </div>
        </>
    )
}