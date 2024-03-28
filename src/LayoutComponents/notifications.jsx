import '../main.css'

export function Notifications() {
    return (
        <>
            <div className='notification-header'>
                <p className='notification-text'>Notifications</p>
                <p className='notification-gear'>⚙️</p>
            </div>
            <div className='notification-body'>
                <button className='notification-tabs'>
                    All
                    <hr className='notification-line-focus' />
                </button>
                <button className='notification-tabs'>
                    Verified
                    <hr className='notification-line' />
                </button>
                <button className='notification-tabs'>
                    Mention
                    <hr className='notification-line' />
                </button>
            </div>

            <div className='notification-content'>
                <div className='n-container'>
                    <p className='n-contact'>👤</p>
                </div>
            </div>

        </>
    )
}