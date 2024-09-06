import { View, Text, Image, Switch, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import { linkedinLogo } from 'assets'
import styles from './style'
import colors from 'assets/colors/colors'
import { CustomButton, LoginInput } from 'components'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setJob, setLocation, setTitle } from 'services/features/userSlice'

export const JobInfoScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(prevState => !prevState)
    const [inputValueLocation, setInputValueLocation] = useState('')
    const [inputValueJob, setInputValueJob] = useState('')
    const [inputValueTitle, setInputValueTitle] = useState('')
    const handleInputChangeLocation = useCallback((inputText: string) => {
        setInputValueLocation(inputText)
    }, [])

    const handleInputChangeJob = useCallback((inputText: string) => {
        setInputValueJob(inputText)
    }, [])
    const handleInputChangeTitle = useCallback((inputText: string) => {
        setInputValueTitle(inputText)
    }, [])

    const handleButton = useCallback(async () => {
        if (inputValueLocation.trim() === '' || inputValueJob.trim() === '' || inputValueTitle.trim() === '') {
            Alert.alert('Hata', 'Lütfen boş alanları doldurun.')
            return
        }
        else {
            dispatch(setJob(inputValueJob))
            dispatch(setLocation(inputValueLocation))
            dispatch(setTitle(inputValueTitle))
            navigation.navigate("ProfilePictureSettingsScreen")
        }
    }, [inputValueLocation, inputValueJob, inputValueTitle])

    return (
        <View style={styles.container}>
            <Image source={linkedinLogo} style={styles.logo} />
            <Text style={styles.infoText}>
                Profiliniz, yeni kişileri ve fırsatları keşfetmenize yardımcı olur
            </Text>
            <View style={styles.studentSection}>
                <Text style={styles.studentText}>
                    Öğrenciyim
                </Text>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>
                        {isEnabled ? "Evet" : "Hayır"}
                    </Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        thumbColor={isEnabled ? colors.darkGreen : colors.black}
                        trackColor={{ false: '#f1f2f6' }}
                    />
                </View>
            </View>
            <View style={styles.inputSection}>
                <LoginInput onInputChange={handleInputChangeLocation} placeholder='Konum*' />
                <LoginInput onInputChange={handleInputChangeJob} placeholder={isEnabled ? 'Üniversite veya okul*' : 'En yeni iş şirket*'} />
                <LoginInput onInputChange={handleInputChangeTitle} placeholder={isEnabled ? 'Başlangıç yılı*' : 'En yeni unvanı*'} />
            </View>
            <CustomButton title='İleri' onPress={handleButton} />
        </View>
    )
}