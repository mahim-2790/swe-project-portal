import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Profile from './Profile'

export default function ProfilewithNav() {
    return (
        <div>
            <Navbar component={<Profile />} />
        </div>
    )
}
