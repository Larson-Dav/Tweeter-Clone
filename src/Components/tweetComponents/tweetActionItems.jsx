export function ActionItems({msg,square,love,upload}){
    return (
        <>
            <img className='tweet-action' src={msg}></img>
            <img className='tweet-action' src={square}></img>
            <img className='tweet-action' src={love}></img>
            <img className='tweet-action' src={upload}></img>
        </>
    )
}