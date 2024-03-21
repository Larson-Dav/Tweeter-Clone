import { Outlet, useParams } from "react-router-dom";
import { Header } from "../Components/header";
import nyt from '../assets/nytimes.png'
import nytIcon from '../assets/nyticon.png'
import cnn from '../assets/cnn.png'
import cnnicon from '../assets/cnicon.png'
import twit from '../assets/twitter.png'
import twitIcon from '../assets/twittericon.png'
import '../App.css'
import { UserProfilePage } from "./userprofilepage";
import { ErrorPage } from "./errorpage";

const currentUserProfile = [
    {
        title: 'New York Time',
        headImage: nyt,
        iconLogo: nytIcon
    },
    {
        title: 'CNN',
        headImage: cnn,
        iconLogo: cnnicon
    },
    {
        title: 'Twitter',
        headImage: twit,
        iconLogo: twitIcon
    }
]

export function TweetProfileLayout() {
    let { username } = useParams();
    return (
        <>
            {
                username == 'cnn' ? <UserProfilePage
                    postProfile='post-profile'
                    postProfileIcon='post-profile-icon'
                    headImage={currentUserProfile[1].headImage}
                    iconImage={currentUserProfile[1].iconLogo}
                    Title={currentUserProfile[1].title}>
                    <Outlet />
                </UserProfilePage> : username == 'nytimes' ? <UserProfilePage
                    postProfile='post-profile'
                    postProfileIcon='post-profile-icon'
                    headImage={currentUserProfile[0].headImage}
                    iconImage={currentUserProfile[0].iconLogo}
                    Title={currentUserProfile[0].title}>
                    <Outlet />
                </UserProfilePage> : username == 'twitter' ? <UserProfilePage
                    postProfile='post-profile'
                    postProfileIcon='post-profile-icon'
                    headImage={currentUserProfile[2].headImage}
                    iconImage={currentUserProfile[2].iconLogo}
                    Title={currentUserProfile[2].title}>
                    <Outlet />
                </UserProfilePage> : <ErrorPage></ErrorPage>
            }
        </>
    )
}