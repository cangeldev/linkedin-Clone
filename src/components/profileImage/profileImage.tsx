import React from 'react'
import { Image } from 'react-native'
import style from './style'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { resolveProfileImage } from 'utils/helper'

/**
 * `ProfileImage` bileşeni, , kullanıcının profil fotoğrafını yükleyen ve gösteren bir bileşendir. Kullanıcı fotoğrafını Firebase'den alır ve varsayılan bir profil resmi ile birlikte gösterir.
 */
export const ProfileImage = () => {

    const profileImage = useSelector((state: RootState) => state.userSlice.loggedUserInfo.profileImage)
    const profileImageSource = resolveProfileImage(profileImage)

    return (
        <Image
            source={profileImageSource}
            style={style.profileImage}
        />
    )
}