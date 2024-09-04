import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import style from './style'
import { profileExample } from 'assets'

interface ProfileImageProps {
    defaultImage?: ImageSourcePropType
}

export const ProfileImage: React.FC<ProfileImageProps> = React.memo(({ defaultImage }) => {
    const profileImage = useSelector((state: RootState) => state.userSlice.profileImage)
    const imageSource = profileImage ? { uri: profileImage } : (defaultImage || profileExample)

    return (
        <Image source={imageSource} style={style.profileImage} />
    )
})
