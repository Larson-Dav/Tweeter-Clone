import { Header } from "../Components/header";
import { Tweet } from "../Components/tweet";
import { TweetEditor } from "../Components/tweet-editor";

export function MainLayout() {
    return (
        <>
            <Header>Home</Header>
            <TweetEditor buttonName='Tweets'></TweetEditor>
            <Tweet></Tweet>
        </>
    )
}