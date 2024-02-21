export function TweetTitle({Autor, Tag, Date, Icon}){
    return (
        <>
           <div className='tweet-title'>
                <p className='tweet-title-author'>{Autor} <img  src={Icon}></img></p>
                <p className='tweet-title-details'>{Tag}</p>
                <p className='tweet-title-details'>.</p>
                <p className='tweet-title-details'>{Date}</p>
            </div> 
        </>
    )
}