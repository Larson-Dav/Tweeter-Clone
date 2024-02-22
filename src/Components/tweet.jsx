import { TweetFragment } from './tweetComponents/tweetComponent'
import tweetAvatar1 from '../Components/tweetComponents/tweetAssets/TP.png'
import tweetAvatar2 from '../Components/tweetComponents/tweetAssets/Tweet-Profile-Photo.png'
import tweetAvatar3 from '../Components/tweetComponents/tweetAssets/T.png'

const tweetCollection = [
    {
        innetText: `President Joe Biden touted a new agreement reached with the European 
        Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both 
        strengthen the US steel industry and combat the global climate crisis.`,
        author: {
            title: 'CNN',
            tag: '@CNN',
            ms: '7m'
        },
        hasImage: false,
        avatarImage: tweetAvatar1,
        action: 'cnn'
    },
    {
        innetText: `Gardening boomed during the pandemic. Six Black writers share how it has 
        helped them re-establish, and reimagine, a connection to cultivation and the land`,
        author: {
            title: 'The New York Times',
            tag: '@nytimes',
            ms: '2h'
        },
        hasImage: true,
        avatarImage: tweetAvatar2,
        action: 'gard'
    },
    {
        innetText: `BIG NEWS lol jk still Twitter`,
        author: {
            title: 'Tweeter',
            tag: '@Tweeter',
            ms: 'Oct29'
        },
        hasImage: false,
        avatarImage: tweetAvatar3,
        action: 'big'
    },
    {
        innetText: `hello literally everyone`,
        author: {
            title: 'Tweeter',
            tag: '@Tweeter',
            ms: 'Oct4'
        },
        hasImage: false,
        avatarImage: tweetAvatar3,
        action: 'tw'
    },
    {
        innetText: `hello literally everyone`,
        author: {
            title: 'Tweeter',
            tag: '@Tweeter',
            ms: 'Oct4'
        },
        hasImage: true,
        avatarImage: tweetAvatar3,
        action: 'tw'
    }
]
//innerText, Author, dtTag, dtDate, hasImage, Avatar 
export function Tweet(){
    return (
        <>
           <div className="tweets">
            {
                tweetCollection.map(function(fragment){
                    return <TweetFragment key={tweetCollection.indexOf(fragment)} innerText={fragment.innetText} 
                           Author={fragment.author.title} 
                           dtTag={fragment.author.tag} 
                           dtDate={fragment.author.ms}
                           hasImage={fragment.hasImage}
                           Avatar={fragment.avatarImage}
                           Action={fragment.action}>
                    </TweetFragment>
                })
            }
           </div>
        </>
    )
}