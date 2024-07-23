import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { premium, profileExample, settings } from 'assets'
import style from './style'
import { CustomDrawerMenuButton, CustomIconTextButton, Divider } from 'components'

export const DrawerMenuPage = () => {

    return (
        <View style={{ flex: 1 }}>
            <View style={style.headerContainer}>
                <Image
                    source={profileExample}
                    style={style.profileImage}
                />
                <Text style={style.name}>
                    Can Gel
                </Text>
                <Text style={style.goProfileText}>
                    Profili görüntüle
                </Text>
                <Text style={style.whoViewedText}>
                    <Text style={style.whoViewedCountText}>
                        3{" "}
                    </Text>
                    profil görüntülesi
                </Text>
            </View>
            <Divider />
            <View style={style.container}>
                <CustomDrawerMenuButton
                    page='SavedPostsPage'
                    pageName='Kaydedilen gönderiler'
                />
                <CustomDrawerMenuButton
                    page='GroupsPage'
                    pageName='Gruplar'
                />
            </View>
            <Divider />
            <View style={style.bottomPartContentView}>
                <TouchableOpacity style={style.premiumContainer}>
                    <Image source={premium} style={style.premiumImage} />
                    <Text style={style.premiumText}>
                        Premium'u aktif edin: %50{"\n"}indirimli
                    </Text>
                </TouchableOpacity>
                <CustomIconTextButton title='Ayarlar' icon={settings} />
            </View>
        </View>
    )
}
