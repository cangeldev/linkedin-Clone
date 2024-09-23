import { View, Button, Text } from 'react-native'
import React from 'react'
import style from './style'
import { defaultProfileImage } from 'assets'
import { PostCardComponents } from 'components/cards/postCardComponents'
import { useTranslation } from 'react-i18next';
import i18n from 'utils/i18next'
/**
 * HomeScreen - Uygulamanın anasayfasıdır yapılan paylaşımların felan listelendiği sayfadır.
 */
export const Home = () => {
    const { t } = useTranslation()

    const toggleButton = () => {
        const newLanguage = i18n.language === 'en' ? 'tr' : 'en';
        i18n.changeLanguage(newLanguage); // Dil değişimini gerçekleştir
    }
    return (
        <View style={style.container}>
            <PostCardComponents
                reactionName='Salih Rzayev'
                reactionImage={defaultProfileImage}
                sharingName='Lamiya Safarova'
                sharingImage={defaultProfileImage}
            />
            <View style={style.container}>
                <Text >
                    {t('greeting')}
                </Text>
                <Button
                    title='TR-EN'
                    onPress={toggleButton}
                />
            </View>
        </View>
    )
}