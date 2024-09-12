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

/**
 * JobInfoScreen - Bu sayfa  kayıt olma sırasında kullanıcının iş bilgilerinin ve konum bilgisinin alındı kısımdır ilk olarak redux toolkite kaydedilir daha sonrasında tüm bilgilerle beraber firebaseye aktarılır.
 */
export const JobInfoScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = useCallback(() => setIsEnabled(prevState => !prevState), [])
    const [formData, handleInputChange] = useForm({ location: '', job: '', title: '' })

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
                Profiliniz, yeni kişileri ve fırsatları keşfetmenize yardımcı olur
            </Text>
            <View style={styles.studentSection}>
                <Text style={styles.studentText}>Öğrenciyim</Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>{isEnabled ? "Evet" : "Hayır"}</Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        thumbColor={isEnabled ? colors.darkGreen : colors.black}
                        trackColor={{ false: '#f1f2f6' }}
                    />
                </View>
            </View>
            <View style={styles.inputSection}>
                <LoginInput onInputChange={(text) => handleInputChange('location', text)} placeholder='Konum*' />
                <LoginInput onInputChange={(text) => handleInputChange('job', text)} placeholder={isEnabled ? 'Üniversite veya okul*' : 'En yeni iş şirket*'} />
                <LoginInput onInputChange={(text) => handleInputChange('title', text)} placeholder={isEnabled ? 'Başlangıç yılı*' : 'En yeni unvanı*'} />
            </View>
            <CustomButton title='İleri' onPress={handleButton} />
        </View>
    )
}
