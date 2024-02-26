export function ActionItem({icon,msg,hasText}){
    return (
        <> 
            <div className="tweet-action">
                <img src={icon}></img>
                {
                    hasText ? <span>{msg}</span> : null
                }
            </div>
        </>
    )
}