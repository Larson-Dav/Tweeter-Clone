import '../../main.css'

export function ProfileHeader({ pProfile, headImg, pPr, iconImg, pTitle }) {
    return (
        <>
            <div className={pProfile} style={{ backgroundImage: `url(${headImg})` }}>
                <h1 className='page-title'></h1>
            </div>
            <div className={pPr} style={{ backgroundImage: `url(${iconImg})` }}></div>
            <h1 className="ptitle">{pTitle}</h1>
        </>
    )
}