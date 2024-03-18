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
import { Link } from 'react-router-dom'

const sidebar = [
    {
        text: '',
        image: tweet,
        link: '/'
    },
    {
        text: 'Home',
        image: duno,
        link: '/'
    },
    {
        text: 'Explore',
        image: hashtag,
        link: '/explore'
    },
    {
        text: 'Notifications',
        image: bell,
        link: '/notifications'
    },
    {
        text: 'Messages',
        image: msgloop,
        link: 'messages'
    },
    {
        text: 'Bookmarks',
        image: bookmarks,
        link: 'bookmarks'
    },
    {
        text: 'Lists',
        image: list,
        link: '/lists'
    },
    {
        text: 'Profile',
        image: profile,
        link: '/myprofile'
    },
    {
        text: 'More',
        image: more,
        link: '/more'
    }
]

export function Sidebar() {
    return (
        <>
            <div className='dop'></div>
            {
                sidebar.map(function (item) {
                    return <>
                        <div className='dop' key={item.text}>
                            <img src={item.image}></img>
                            <p className='homeboon'>
                                <Link to={item.link} style={{ textDecoration: 'none', color: 'white' }}>{item.text}</Link>
                            </p>
                        </div>
                    </>
                })
            }
            <div className='dip'><button className='sidebutton'>Tweet</button></div>
        </>
    )
}