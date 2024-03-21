import '../../boon.css'

export function ProfileDescription() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <p style={{ marginLeft: '15px', fontSize: '16px', color: '#656565' }}>@New york Time</p>
                    <p style={{ marginLeft: '15px', fontSize: '16px', color: '#fff' }}>Enjoy our best offer on the complete Times experience</p>
                    <p style={{ marginLeft: '15px', fontSize: '12px', color: 'blue' }}>Translate bio</p>
                    <p style={{ marginLeft: '15px', fontSize: '14px', color: '#656565' }}>Francenetflix.com  Born August 29  Joined February 2014</p>
                    <p style={{ marginLeft: '15px', fontSize: '14px', color: '#656565' }}><strong style={{ color: '#fff' }}>823</strong> Following     <strong style={{ color: '#fff' }}>12.8M</strong> Follwers</p>
                </div>
                <div>
                    <button style={{ padding: '10px 30px 10px 30px', borderRadius: '20px', border: '1px solid white', marginRight: '15px', backgroundColor: '#ffffff00', color: '#fff' }}>following</button>
                    <button style={{ padding: '10px 30px 10px 30px', borderRadius: '20px', border: '1px solid white', marginRight: '15px', backgroundColor: '#ffffff00', color: '#fff' }}>look</button>
                    <button style={{ padding: '10px 30px 10px 30px', borderRadius: '20px', border: '1px solid white', marginRight: '15px', backgroundColor: '#ffffff00', color: '#fff' }}>🪟</button>
                </div>
            </div>
        </>
    )
}