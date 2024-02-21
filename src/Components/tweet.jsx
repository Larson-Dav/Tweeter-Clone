import tweetImg from '../assets/Tweet-img.png'
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
        avatarImage: tweetAvatar1
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
        avatarImage: tweetAvatar2
    },
    {
        innetText: `BIG NEWS lol jk still Twitter`,
        author: {
            title: 'Tweeter',
            tag: '@Tweeter',
            ms: 'Oct29'
        },
        hasImage: false,
        avatarImage: tweetAvatar3
    },
    {
        innetText: `hello literally everyone`,
        author: {
            title: 'Tweeter',
            tag: '@Tweeter',
            ms: 'Oct4'
        },
        hasImage: false,
        avatarImage: tweetAvatar3
    },
    {
        innetText: `hello literally everyone`,
        author: {
            title: 'Tweeter',
            tag: '@Tweeter',
            ms: 'Oct4'
        },
        hasImage: true,
        avatarImage: tweetAvatar3
    }
]
//innerText, Author, dtTag, dtDate, hasImage, Avatar 
export function Tweet(){
    return (
        <>
           <div className="tweets">
            <TweetFragment innerText={tweetCollection[0].innetText} 
                           Author={tweetCollection[0].author.title} 
                           dtTag={tweetCollection[0].author.tag} 
                           dtDate={tweetCollection[0].author.ms}
                           hasImage={tweetCollection[0].hasImage}
                           Avatar={tweetCollection[0].avatarImage}>
            </TweetFragment>
            <TweetFragment innerText={tweetCollection[1].innetText} 
                           Author={tweetCollection[1].author.title} 
                           dtTag={tweetCollection[1].author.tag} 
                           dtDate={tweetCollection[1].author.ms}
                           hasImage={tweetCollection[1].hasImage}
                           Avatar={tweetCollection[1].avatarImage}>
            </TweetFragment>
            <TweetFragment innerText={tweetCollection[2].innetText} 
                           Author={tweetCollection[2].author.title} 
                           dtTag={tweetCollection[2].author.tag} 
                           dtDate={tweetCollection[2].author.ms}
                           hasImage={tweetCollection[2].hasImage}
                           Avatar={tweetCollection[2].avatarImage}>
            </TweetFragment>
            <TweetFragment innerText={tweetCollection[3].innetText} 
                           Author={tweetCollection[3].author.title} 
                           dtTag={tweetCollection[3].author.tag} 
                           dtDate={tweetCollection[3].author.ms}
                           hasImage={tweetCollection[3].hasImage}
                           Avatar={tweetCollection[3].avatarImage}>
            </TweetFragment>
            <TweetFragment innerText={tweetCollection[4].innetText} 
                           Author={tweetCollection[4].author.title} 
                           dtTag={tweetCollection[4].author.tag} 
                           dtDate={tweetCollection[4].author.ms}
                           hasImage={tweetCollection[4].hasImage}
                           Avatar={tweetCollection[4].avatarImage}>
            </TweetFragment>
           </div>
        </>
    )
}