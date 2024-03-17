import '../boon.css'
import '../App.css'

import tweet from '../assets/icons/tweet.png'
import duno from '../assets/Vector.png'
import hashtag from '../assets/icons/hashtag.png'
import bell from '../assets/icons/bell.png'
import msgloop from '../assets/icons/loop.png'
import bookmarks from '../assets/icons/boon.png'
import list from '../assets/icons/page.png'
import profile from '../assets/icons/operator.png'
import more from '../assets/icons/vec.png'

const sidebar = [
    {
        text: '',
        image: tweet
    },
    {
        text: 'Home',
        image: duno
    },
    {
        text: 'Explore',
        image: hashtag
    },
    {
        text: 'Notifications',
        image: bell
    },
    {
        text: 'Messages',
        image: msgloop
    },
    {
        text: 'Bookmarks',
        image: bookmarks
    },
    {
        text: 'Lists',
        image: list
    },
    {
        text: 'Profile',
        image: profile
    },
    {
        text: 'More',
        image: more
    }
]

export function Sidebar() {
    return (
        <>
            <div className='dop'></div>
            {
                sidebar.map(function (item) {
                    return <>
                        <div className='dop'>
                            <img src={item.image}></img>
                            <p className='homeboon'>{item.text}</p>
                        </div>
                    </>
                })
            }
            <div className='dip'><button className='sidebutton'>Tweet</button></div>
        </>
    )
}