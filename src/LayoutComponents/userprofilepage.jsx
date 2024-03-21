import { Outlet } from 'react-router-dom'
import '../boon.css'
import { ProfileHeader } from './profilecomponents/profileheader'
import { ProfileDescription } from './profilecomponents/profilesdescription'
import { ProfileTabs } from './profilecomponents/profiletabs'

export function UserProfilePage({ postProfile, postProfileIcon, headImage, iconImage, Title, children }) {
    return (
        <> 
            <ProfileHeader pProfile={postProfile} pPr={postProfileIcon} headImg={headImage} pTitle={Title} iconImg={iconImage}></ProfileHeader>
            <ProfileDescription></ProfileDescription>
            <ProfileTabs></ProfileTabs>
            {children}
        </>
    )
}