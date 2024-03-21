import '../boon.css'

export function Notifications() {
    return (
        <>
            <div style={{ backgroundColor: '#000', width: '100%', height: '50px', display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '20px', fontWeight: '600', marginLeft: '15px', marginTop: '15px' }}>Notifications</p>
                <p style={{ fontSize: '20px', fontWeight: '600', marginRight: '15px', marginTop: '15px' }}>⚙️</p>
            </div>
            <div style={{ backgroundColor: '#000', width: '100%', height: '50px', borderBottom: '1px solid #656565', display: 'flex', justifyContent: 'center' }}>
                <button className='notification-tabs'>
                    All
                    <hr style={{ height: '5px', border: 'none', backgroundColor: '#1D9BF0', borderRadius: '2.5px' }} />
                </button>
                <button className='notification-tabs'>
                    Verified
                    <hr style={{ height: '5px', border: 'none', backgroundColor: '#ffffff00', borderRadius: '2.5px' }} />
                </button>
                <button className='notification-tabs'>
                    Mention
                    <hr style={{ height: '5px', border: 'none', backgroundColor: '#ffffff00', borderRadius: '2.5px' }} />
                </button>
            </div>

            <div style={{ backgroundColor: '#000', width: '100%', height: '100px', borderBottom: '1px solid #656565', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                    <p style={{ fontSize: '30px' }}>👤</p>
                </div>
            </div>

        </>
    )
}