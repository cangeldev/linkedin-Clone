import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import style from './style'
import { getUserData } from 'services/firebase/firebase'
import { defaultProfileImage } from 'assets'

/**
 * `ProfileImage` bileşeni, , kullanıcının profil fotoğrafını yükleyen ve gösteren bir bileşendir. Kullanıcı fotoğrafını Firebase'den alır ve varsayılan bir profil resmi ile birlikte gösterir.
 */
export const ProfileImage = () => {

    const [profileImage, setProfileImage] = useState<any>()
    const imageSource = profileImage ? { uri: profileImage as any } : defaultProfileImage

    useEffect(() => {
        const getUsers = async () => {
            const fetchedUsersInfo = await getUserData("profileImageUrl")
            setProfileImage(fetchedUsersInfo)
        }
        getUsers()
    }, [])

    return (
        <Image
            source={imageSource}
            style={style.profileImage}
        />
    )
}