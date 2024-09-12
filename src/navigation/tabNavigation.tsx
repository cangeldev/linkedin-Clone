import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'assets/colors/colors'
import { Header, TabBarButton } from 'components'
import { screens } from 'components/getIcon/getIcon'
import { PostModal } from 'screens/bottomTabScreens'

const headerStyle = { height: 40 }
const tabBarLabelStyle = {
    marginTop: -10,
    marginBottom: 4,
    fontWeight: '500' as '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
}

const tabBarOptions = {
    tabBarActiveTintColor: colors.black,
    tabBarInactiveTintColor: colors.grey,
    tabBarLabelStyle: tabBarLabelStyle,
    tabBarHideOnKeyboard: true,
}

/**
 * TabNavigation - Uygulamanın alt sekme (bottom tab) navigasyonunu yönetir ve özel olarak yapılandırılmış tab bar ile modallar içerir.
 */
export const TabNavigation = React.memo(() => {
    const Tab = createBottomTabNavigator()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModalClose = () => setIsModalVisible(false)
    const handlePostButtonPress = () => setIsModalVisible(true)

    return (
        <>
            <PostModal isVisible={isModalVisible} onClose={handleModalClose} />
            <Tab.Navigator
                initialRouteName='HomeScreen'
                screenOptions={({ route, navigation }) => ({
                    headerStyle: headerStyle,
                    headerLeft: () => null,
                    headerTitle: () => <Header navigation={navigation} />,
                    tabBarButton: (props) =>
                        route.name === 'PostScreen' ? (
                            <TabBarButton {...props} onPress={handlePostButtonPress} />
                        ) : (
                            <TabBarButton {...props} />
                        ),
                    ...tabBarOptions,
                })}
            >
                {screens.map((screen) => (
                    <Tab.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                ))}
            </Tab.Navigator>
        </>
    )
})
