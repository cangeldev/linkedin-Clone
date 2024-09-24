import { View, Text, Image, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import { premium, settings } from 'assets'
import style from './style'
import { DrawerMenuButton, IconTextButton, Divider, ProfileImage, CustomButton } from 'components'
import colors from 'assets/colors/colors'
import { getUserData } from 'services/firebase/firebase'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { handleSignOut } from 'services/firebase/firebaseAuth'

// Helper function to ensure the value is a string
const extractString = (value: any): string => {
    return typeof value === 'string' ? value : ''
}

/**
 * DrawerContentPage - bu sayfa  drawer navigationun sunduğu hazır düzeni harici bir tasarım kullanmak istersek diye sunulan özellik için oluşturulan sayfadır uygulamanın gereksinizleri ile dizayn edilmiştir.
 */
export const DrawerContentPage = () => {
    const navigation = useNavigation<any>()
    const [userInfo, setUserInfo] = useState<{ name: string; surname: string }>({ name: '', surname: '' })
    const { t } = useTranslation()

    useEffect(() => {
        const getUsers = async () => {
            try {
                const name = await getUserData("name")
                const surname = await getUserData("surname")
                setUserInfo({ name: extractString(name), surname: extractString(surname) })
            } catch (error) {
                console.error("Failed to fetch user data:", error)
            }
        }
        getUsers()
    }, [])

    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <View style={style.profileImageView}>
                    <ProfileImage />
                </View>
                <Text style={style.name}>
                    {userInfo.name} {userInfo.surname}
                </Text>
                <Text style={style.goProfileText}>{t("viewProfile")}</Text>
                <Text style={style.whoViewedText}>
                    <Text style={style.whoViewedCountText}>3 </Text>
                    {t("profileViewers")}
                </Text>
            </View>
            <Divider />
            <View style={style.container}>
                <DrawerMenuButton page='SavedPostsPage' pageName={t("savedPosts")} />
                <DrawerMenuButton page='GroupsPage' pageName={t("groups")} />
            </View>
            <View style={style.signOutButtonView}>
                <CustomButton onPress={() => handleSignOut(navigation)} title={t("signOut")} />
            </View>
            <Divider />
            <View>
                <TouchableHighlight onPress={() => null} underlayColor={colors.lightGrey}>
                    <View style={style.premiumContainer}>
                        <Image source={premium} style={style.premiumImage} />
                        <Text style={style.premiumText}>
                            {t("reactivePremium")}{"\n"}{t("discounted")}
                        </Text>
                    </View>
                </TouchableHighlight>
                <IconTextButton title={t("settings")} icon={settings} />
            </View>
        </View>
    )
}
