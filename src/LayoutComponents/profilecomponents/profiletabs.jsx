import '../../boon.css'

export function ProfileTabs() {
    return (
        <>
            <div style={{ backgroundColor: '#000000', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', borderBottom: '1px solid gray' }}>
                <button className='twitter-profile-btn'>
                    Posts
                    <hr style={{ height: '5px', backgroundColor: '#1D9BF0', border: 'none', borderRadius: '2.5px' }} />
                </button>
                <button className='twitter-profile-btn'>
                    Replies
                    <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                </button>
                <button className='twitter-profile-btn'>
                    HighLights
                    <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                </button>
                <button className='twitter-profile-btn'>
                    Media
                    <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                </button>
                <button className='twitter-profile-btn'>
                    Likes
                    <hr style={{ height: '5px', backgroundColor: '#ffffff00', border: 'none', borderRadius: '2.5px' }} />
                </button>
            </div>
        </>
    )
}