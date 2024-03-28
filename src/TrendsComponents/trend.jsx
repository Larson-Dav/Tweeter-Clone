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
                        <h2 className='trends-main-title'>Trends for you</h2>
                    </div>
                    <div className='flox2'>⚙️ </div>
                </div>
                <div className='Trending'>
                    <div className='flox1'>
                        <p className='trends-main-content-subtitle'>Trending in Turkey</p>
                        <h2 className='trends-main-content-title'>#SQUID</h2>
                        <p className='trends-main-content-tweets'>2066 Tweets</p>
                    </div>
                    <div className='flox2'><p className='trends-main-content-dot'>...   </p></div>
                </div>
                <div className='Trending'>
                    <div className='flox1'>
                        <p className='trends-main-content-subtitle'>Trending in Turkey</p>
                        <h2 className='trends-main-content-title'>#SQUID</h2>
                        <p className='trends-main-content-tweets'>2066 Tweets</p>
                    </div>
                    <div className='flox2'><p className='trends-main-content-dot'>...   </p></div>
                </div>
                <div className='Trending'>
                    <div className='flox1'>
                        <p className='trends-main-content-subtitle'>Trending in Turkey</p>
                        <h2 className='trends-main-content-title'>#SQUID</h2>
                        <p className='trends-main-content-tweets'>2066 Tweets</p>
                    </div>
                    <div className='flox2'><p className='trends-main-content-dot'>...   </p></div>
                </div>
                <div className='Trending'>
                    <div className='flox1'>
                        <p className='trends-main-content-subtitle'>Trending in Turkey</p>
                        <h2 className='trends-main-content-title'>#SQUID</h2>
                        <p className='trends-main-content-tweets'>2066 Tweets</p>
                    </div>
                    <div className='flox2'><p className='trends-main-content-dot'>...   </p></div>
                </div>
                <div className='Trendin'>
                    <div className='flox1'>
                        <h2 className='trends-main-content-showmore'>Show more</h2>
                    </div>
                </div>
            </div>
            {/* ================================================================================ */}
            <div className='doman'>
                <h2 className='domain-title'>Who to follow</h2>
                <div className='follow'>
                    <div className='follow-icon'>
                        <img src={followIconNY}></img>
                    </div>
                    <div className='follow-text'>
                        <h3 className='domain-content-title'>The New York Times </h3>
                        <p className='domain-content-subtitle'>@nytimes</p>
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
                        <h3 className='domain-content-title-sec'>CNN </h3>
                        <p className='domain-content-subtitle-sec'>@CNN</p>
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
                        <h3 className='domain-content-title-third'>Twitter </h3>
                        <p className='domain-content-subtitle-third'>@Twitter</p>
                    </div>
                    <div className='follow-btn'>
                        <button className='f-btn'>follow</button>
                    </div>
                </div>
                <h2 className='domain-content-showmore'>Show more</h2>
            </div>
        </div >
    </>
    )
}