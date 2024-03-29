import '../boon.css'
import '../App.css'
import imgH from '../assets/myhead.png'
import imgI from '../assets/myprofile.png'
import { ProfileHeader } from './profilecomponents/profileheader'
import { ProfileDescription } from './profilecomponents/profilesdescription'
import { ProfileTabs } from './profilecomponents/profiletabs'

export function MyProfileLayout() {
    return (
        <>
            <ProfileHeader pProfile='post-profile' pPr='post-profile-icon' headImg={imgH} pTitle='My Profile' iconImg={imgI}></ProfileHeader>
            <ProfileDescription></ProfileDescription>
            <ProfileTabs></ProfileTabs>
        </>
    )
}