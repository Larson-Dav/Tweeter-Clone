import '../../main.css'

export function ProfileDescription() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <p className='para-default'>@New york Time</p>
                    <p className='.para-blue'>Enjoy our best offer on the complete Times experience</p>
                    <p className='para-blue'>Translate bio</p>
                    <p className='para-default'>Francenetflix.com  Born August 29  Joined February 2014</p>
                    <p className='para-default'><strong className='white'>823</strong> Following     <strong className='white'>12.8M</strong> Follwers</p>
                </div>
                <div>
                    <button className='user-profile-btn'>following</button>
                    <button className='user-profile-btn'>look</button>
                    <button className='user-profile-btn'>🪟</button>
                </div>
            </div>
        </>
    )
}