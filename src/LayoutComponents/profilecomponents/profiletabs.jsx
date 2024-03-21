import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../../boon.css'

export function ProfileTabs() {
    const location = useLocation()
    const currentPath = location.pathname.split('/')
    const currentTab = currentPath[currentPath.length - 1]
    const navig = useNavigate()
    return (
        <>
            <div style={{ backgroundColor: '#000000', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', borderBottom: '1px solid gray' }}>
                <button className='twitter-profile-btn' onClick={() => navig('posts')}>
                    Posts
                    {
                        currentTab == 'posts' ? <hr style={{ height: '5px', backgroundColor: '#1D9BF0', border: 'none', borderRadius: '2.5px' }} /> :
                            <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                    }
                </button>
                <button className='twitter-profile-btn' onClick={() => navig('replies')}>
                    Replies
                    {
                        currentTab == 'replies' ? <hr style={{ height: '5px', backgroundColor: '#1D9BF0', border: 'none', borderRadius: '2.5px' }} /> :
                            <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                    }
                    <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                </button>
                <button className='twitter-profile-btn' onClick={() => navig('highlights')}>
                    HighLights
                    {
                        currentTab == 'highlights' ? <hr style={{ height: '5px', backgroundColor: '#1D9BF0', border: 'none', borderRadius: '2.5px' }} /> :
                            <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                    }
                </button>
                <button className='twitter-profile-btn' onClick={() => navig('medias')}>
                    Medias
                    {
                        currentTab == 'medias' ? <hr style={{ height: '5px', backgroundColor: '#1D9BF0', border: 'none', borderRadius: '2.5px' }} /> :
                            <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                    }
                </button>
                <button className='twitter-profile-btn' onClick={() => navig('likes')}>
                    Likes
                    {
                        currentTab == 'likes' ? <hr style={{ height: '5px', backgroundColor: '#1D9BF0', border: 'none', borderRadius: '2.5px' }} /> :
                            <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                    }
                </button>
            </div >
        </>
    )
}