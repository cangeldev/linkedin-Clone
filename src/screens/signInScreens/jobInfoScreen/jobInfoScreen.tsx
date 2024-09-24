import React, { useCallback, useState } from 'react'
import { View, Text, Image, Switch, Alert } from 'react-native'
import { linkedinLogo } from 'assets'
import styles from './style'
import colors from 'assets/colors/colors'
import { CustomButton, LoginInput } from 'components'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setJob, setLocation, setTitle } from 'services/features/userSlice'
import { useForm } from 'hooks/useForm'
import { useTranslation } from 'react-i18next'

/**
 * JobInfoScreen - Bu sayfa  kayıt olma sırasında kullanıcının iş bilgilerinin ve konum bilgisinin alındı kısımdır ilk olarak redux toolkite kaydedilir daha sonrasında tüm bilgilerle beraber firebaseye aktarılır.
 */
export const JobInfoScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = useCallback(() => setIsEnabled(prevState => !prevState), [])
    const [formData, handleInputChange] = useForm({ location: '', job: '', title: '' })
    const { t } = useTranslation()

    const handleButton = useCallback(() => {
        const { location, job, title } = formData
        if (!location.trim() || !job.trim() || !title.trim()) {
            Alert.alert('Hata', 'Lütfen boş alanları doldurun.')
            return
        }
        dispatch(setJob(job))
        dispatch(setLocation(location))
        dispatch(setTitle(title))
        navigation.navigate("ProfilePictureSettingsScreen")
    }, [formData])

    return (
        <View style={styles.container}>
            <Image source={linkedinLogo} style={styles.logo} />
            <Text style={styles.infoText}>
                {t("yourProfileHelpsYouDiscoverNewPeopleAndOpportunities")}
            </Text>
            <View style={styles.studentSection}>
                <Text style={styles.studentText}>{t("iAmStudent")}</Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>{isEnabled ? t("yes") : t("no")}</Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        thumbColor={isEnabled ? colors.darkGreen : colors.black}
                        trackColor={{ false: '#f1f2f6' }}
                    />
                </View>
            </View>
            <View style={styles.inputSection}>
                <LoginInput onInputChange={(text) => handleInputChange('location', text)} placeholder={t("location")} />
                <LoginInput onInputChange={(text) => handleInputChange('job', text)} placeholder={isEnabled ? t("universityOrSchool") : t("company")} />
                <LoginInput onInputChange={(text) => handleInputChange('title', text)} placeholder={isEnabled ? t("startYear") : t("title")} />
            </View>
            <CustomButton title={t("continue")} onPress={handleButton} />
        </View>
    )
}
