import { View, Text, Image } from 'react-native'
import React from 'react'
import { logo } from 'assets'
import style from './style'
import { Divider } from 'components'

export const DrawerMenuPage = () => {
    return (
        <View>
            <View style={style.headerContainer}>
                <Image
                    source={logo}
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
        </View>
    )
}
