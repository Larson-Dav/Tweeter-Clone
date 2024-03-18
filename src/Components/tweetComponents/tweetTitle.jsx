import { Link } from 'react-router-dom'

export function TweetTitle({ Autor, Tag, Date, Icon }) {
    return (
        <>
            <div className='tweet-title'>
                <div className='tweet-title-author'>{Autor}</div>
                <img src={Icon}></img>
                <div className='tweet-title-details'>{Tag}</div>
                <div className='tweet-title-details'>.</div>
                <div className='tweet-title-details'>{Date}</div>
            </div>
        </>
    )
}