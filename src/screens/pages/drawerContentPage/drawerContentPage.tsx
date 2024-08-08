import { View, Text, Image, TouchableHighlight, } from 'react-native'
import React from 'react'
import { premium, profileExample, settings } from 'assets'
import style from './style'
import { DrawerMenuButton, IconTextButton, Divider } from 'components'
import colors from 'assets/colors/colors'

export const DrawerContentPage = () => {

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
                <DrawerMenuButton
                    page='SavedPostsPage'
                    pageName='Kaydedilen gönderiler'
                />
                <DrawerMenuButton
                    page='GroupsPage'
                    pageName='Gruplar'
                />
            </View>
            <Divider />
            <View >
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
