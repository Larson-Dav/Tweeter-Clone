import trump from '../../assets/tez.png'
import icon from '../../assets/nyticon.png'

export function LikesTab() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'start', columnGap: '10px', backgroundColor: '#ffffff00', width: '100%', height: '80px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '30px', backgroundColor: 'gray', backgroundImage: `url(${icon})`, marginTop: '10px', marginLeft: '10px' }}></div>
                <div style={{ backgroundColor: '#000', width: '660px' }}>
                    <p style={{ color: '#fff', fontWeight: '600' }}>The New York Time</p>
                    <p style={{ color: '#656565', fontSize: '14px' }}>🧵 Here's a guide to how you can keep up with The New York Times, on and off Twitter.</p>
                </div>
                <div>
                    <p style={{ color: '#333', marginLeft: '10px', fontSize: '20px' }}>...</p>
                </div>
            </div>
            <div style={{ backgroundColor: '#ffffff00', width: '100%', height: '350px', display: 'flex', justifyContent: 'space-between' }}>
                <div></div>
                <div style={{ backgroundColor: '#ffffff00', backgroundImage: `url(${trump})`, border: '1px solid #656565', width: '500px', height: '300px', marginTop: '30px', borderRadius: '20px' }}></div>
                <div></div>
            </div>
        </>
    )
}