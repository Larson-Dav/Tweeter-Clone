import { useLocation, useNavigate } from 'react-router-dom'
import '../../boon.css'
import '../../main.css'

export function ProfileTabs() {
    const location = useLocation()
    const currentPath = location.pathname.split('/')
    const currentTab = currentPath[currentPath.length - 1]
    const navig = useNavigate()
    return (
        <>
            <div className='profile-tab-container'>
                <button className='twitter-profile-btn' onClick={() => navig('posts')}>
                    Posts
                    {
                        currentTab == 'posts' ? <hr className='line-focus' /> :
                            <hr className='line-not-focus' />
                    }
                </button>
                <button className='twitter-profile-btn' onClick={() => navig('replies')}>
                    Replies
                    {
                        currentTab == 'replies' ? <hr className='line-focus' /> :
                            <hr className='line-not-focus' />
                    }
                </button>
                <button className='twitter-profile-btn' onClick={() => navig('highlights')}>
                    HighLights
                    {
                        currentTab == 'highlights' ? <hr className='line-focus' /> :
                            <hr className='line-not-focus' />
                    }
                </button>
                <button className='twitter-profile-btn' onClick={() => navig('medias')}>
                    Medias
                    {
                        currentTab == 'medias' ? <hr className='line-focus' /> :
                            <hr className='line-not-focus' />
                    }
                </button>
                <button className='twitter-profile-btn' onClick={() => navig('likes')}>
                    Likes
                    {
                        currentTab == 'likes' ? <hr className='line-focus' /> :
                            <hr className='line-not-focus' />
                    }
                </button>
            </div >
        </>
    )
}