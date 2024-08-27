import { Image } from 'react-native'
import React from 'react'
import { profileExample } from 'assets'
import style from './style'

export const ProfileImage = React.memo(() => {
    return (
        <Image source={profileExample} style={style.profileImage} />
    )
})