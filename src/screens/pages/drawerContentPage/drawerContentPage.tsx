import { View, Text, Image, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import { premium, settings } from 'assets'
import style from './style'
import { DrawerMenuButton, IconTextButton, Divider, ProfileImage } from 'components'
import colors from 'assets/colors/colors'
import { getUserData } from 'services/firebase/firebase'

/**
 * DrawerContentPage - bu sayfa  drawer navigationun sunduğu hazır düzeni harici bir tasarım kullanmak istersek diye sunulan özellik için oluşturulan sayfadır uygulamanın gereksinizleri ile dizayn edilmiştir.
 */
export const DrawerContentPage = () => {
    const [userInfo, setUserInfo] = useState({ name: '', surname: '' })

    useEffect(() => {
        const getUsers = async () => {
            try {
                const name = await getUserData("name")
                const surname = await getUserData("surname")
                setUserInfo({ name, surname })
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
                <Text style={style.goProfileText}>Profili görüntüle</Text>
                <Text style={style.whoViewedText}>
                    <Text style={style.whoViewedCountText}>3 </Text>
                    profil görüntülesi
                </Text>
            </View>
            <Divider />
            <View style={style.container}>
                <DrawerMenuButton page='SavedPostsPage' pageName='Kaydedilen gönderiler' />
                <DrawerMenuButton page='GroupsPage' pageName='Gruplar' />
            </View>
            <Divider />
            <View>
                <TouchableHighlight onPress={() => console.log("first")} underlayColor={colors.lightGrey}>
                    <View style={style.premiumContainer}>
                        <Image source={premium} style={style.premiumImage} />
                        <Text style={style.premiumText}>
                            Premium'u aktif edin: %50{"\n"}indirimli
                        </Text>
                    </View>
                </TouchableHighlight>
                <IconTextButton title='Ayarlar' icon={settings} />
            </View>
        </View>
    )
}
