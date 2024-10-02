import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { premium, settings } from 'assets'
import style from './style'
import { DrawerMenuButton, IconTextButton, Divider, ProfileImage, CustomButton } from 'components'
import colors from 'assets/colors/colors'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { handleSignOut } from 'services/firebase/firebaseAuth'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

/**
 * DrawerContentPage - bu sayfa  drawer navigationun sunduğu hazır düzeni harici bir tasarım kullanmak istersek diye sunulan özellik için oluşturulan sayfadır uygulamanın gereksinizleri ile dizayn edilmiştir.
 */
export const DrawerContentPage = () => {
    const navigation = useNavigation<any>()

    const { t } = useTranslation()
    const { name, surname } = useSelector((state: RootState) => state.userSlice.loggedUserInfo)
    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <View style={style.profileImageView}>
                    <ProfileImage />
                </View>
                <Text style={style.name}>
                    {name} {surname}
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
