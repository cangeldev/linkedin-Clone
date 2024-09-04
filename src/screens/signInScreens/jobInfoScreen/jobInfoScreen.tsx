import { View, Text, Image, Switch, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import { linkedinLogo } from 'assets'
import styles from './style'
import colors from 'assets/colors/colors'
import { CustomButton, LoginInput } from 'components'

export const JobInfoScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(prevState => !prevState)
    const [inputValueLocation, setInputValueLocation] = useState('')
    const [inputValueJob, setInputValueJob] = useState('')
    const handleInputChangeLocation = useCallback((inputText: string) => {
        setInputValueLocation(inputText)
    }, [])

    const handleInputChangeJob = useCallback((inputText: string) => {
        setInputValueJob(inputText)
    }, [])

    const handleButton = useCallback(async () => {
        if (inputValueLocation.trim() === '' || inputValueJob.trim() === '') {
            Alert.alert('Hata', 'Lütfen boş alanları doldurun.')
            return
        }
    }, [inputValueLocation, inputValueJob])

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
                <LoginInput onInputChange={handleInputChangeJob} placeholder={isEnabled ? 'En yeni iş unvanı*' : 'Üniversite veya okul*'} />
                <LoginInput onInputChange={() => null} placeholder={isEnabled ? 'En yeni şirket*' : 'Başlangıç yılı*'} />
            </View>
            <CustomButton title='İleri' onPress={handleButton} />
        </View>
    )
}