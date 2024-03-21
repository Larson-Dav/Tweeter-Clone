import '../boon.css'

import followIconNY from '../assets/fi1.png'
import followIconCnn from '../assets/fi2.png'
import followIconTw from '../assets/fi3.png'

export function Trends({ Class }) {
    return (<>
        <div className={Class}>
            <input className="sideinput" placeholder='Search Twitter'></input>
            <div className='domain'>
                <div className='Trendin'>
                    <div className='flox1'>
                        <h2 style={{ color: 'white', fontSize: '16px', margin: '3px' }}>Trends for you</h2>
                    </div>
                    <div className='flox2'>⚙️ </div>
                </div>
                <div className='Trending'>
                    <div className='flox1'>
                        <p style={{ color: 'GrayText', fontSize: '10px', margin: '1px' }}>Trending in Turkey</p>
                        <h2 style={{ color: 'GrayText', fontSize: '13px', margin: '3px' }}>#SQUID</h2>
                        <p style={{ color: 'GrayText', fontSize: '10px', margin: '1px' }}>2066 Tweets</p>
                    </div>
                    <div className='flox2'><p style={{ color: 'GrayText', fontSize: '19px', margin: '1px' }}>...   </p></div>
                </div>
                <div className='Trending'>
                    <div className='flox1'>
                        <p style={{ color: 'GrayText', fontSize: '10px', margin: '1px' }}>Trending in Turkey</p>
                        <h2 style={{ color: 'GrayText', fontSize: '13px', margin: '3px' }}>#SQUID</h2>
                        <p style={{ color: 'GrayText', fontSize: '10px', margin: '1px' }}>2066 Tweets</p>
                    </div>
                    <div className='flox2'><p style={{ color: 'GrayText', fontSize: '19px', margin: '1px' }}>...   </p></div>
                </div>
                <div className='Trending'>
                    <div className='flox1'>
                        <p style={{ color: 'GrayText', fontSize: '10px', margin: '1px' }}>Trending in Turkey</p>
                        <h2 style={{ color: 'GrayText', fontSize: '13px', margin: '3px' }}>#SQUID</h2>
                        <p style={{ color: 'GrayText', fontSize: '10px', margin: '1px' }}>2066 Tweets</p>
                    </div>
                    <div className='flox2'><p style={{ color: 'GrayText', fontSize: '19px', margin: '1px' }}>...   </p></div>
                </div>
                <div className='Trending'>
                    <div className='flox1'>
                        <p style={{ color: 'GrayText', fontSize: '10px', margin: '1px' }}>Trending in Turkey</p>
                        <h2 style={{ color: 'GrayText', fontSize: '13px', margin: '3px' }}>#SQUID</h2>
                        <p style={{ color: 'GrayText', fontSize: '10px', margin: '1px' }}>2066 Tweets</p>
                    </div>
                    <div className='flox2'><p style={{ color: 'GrayText', fontSize: '19px', margin: '1px' }}>...   </p></div>
                </div>
                <div className='Trendin'>
                    <div className='flox1'>
                        <h2 style={{ color: '#1D9BF0', fontSize: '16px', margin: '3px' }}>Show more</h2>
                    </div>
                </div>
            </div>
            {/* ================================================================================ */}
            <div className='doman'>
                <h2 style={{ color: '#fff', fontSize: '16px', margin: '3px', padding: '5px' }}>Who to follow</h2>
                <div className='follow'>
                    <div className='follow-icon'>
                        <img src={followIconNY}></img>
                    </div>
                    <div className='follow-text'>
                        <h3 style={{ color: 'GrayText', fontSize: '13px', margin: '3px' }}>The New York Times </h3>
                        <p style={{ color: 'GrayText', fontSize: '13px', margin: '1px' }}>@nytimes</p>
                    </div>
                    <div className='follow-btn'>
                        <button className='f-btn'>follow</button>
                    </div>
                </div>
                <div className='follow'>
                    <div className='follow-icon'>
                        <img src={followIconCnn}></img>
                    </div>
                    <div className='follow-text'>
                        <h3 style={{ color: 'GrayText', fontSize: '13px', margin: '3px' }}>CNN </h3>
                        <p style={{ color: 'GrayText', fontSize: '13px', margin: '1px', marginRight: '97px' }}>@CNN</p>
                    </div>
                    <div className='follow-btn'>
                        <button className='f-btn'>follow</button>
                    </div>
                </div>
                <div className='follow'>
                    <div className='follow-icon'>
                        <img src={followIconTw}></img>
                    </div>
                    <div className='follow-text'>
                        <h3 style={{ color: 'GrayText', fontSize: '13px', margin: '3px' }}>Twitter </h3>
                        <p style={{ color: 'GrayText', fontSize: '13px', margin: '1px', marginRight: '80px' }}>@Twitter</p>
                    </div>
                    <div className='follow-btn'>
                        <button className='f-btn'>follow</button>
                    </div>
                </div>
                <h2 style={{ color: '#1D9BF0', fontSize: '16px', margin: '3px' }}>Show more</h2>
            </div>
        </div >
    </>
    )
}