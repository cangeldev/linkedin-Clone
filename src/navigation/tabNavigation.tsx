import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'assets/colors/colors'
import { Header, TabBarButton } from 'components'
import { screens } from 'components/getIcon/getIcon'
import { PostModal } from 'screens/bottomTabScreens'

export const TabNavigation = React.memo(() => {

    const Tab = createBottomTabNavigator()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModalClose = () => setIsModalVisible(false)
    const handlePostButtonPress = () => setIsModalVisible(true)

    return (
        <>
            <PostModal isVisible={isModalVisible} onClose={handleModalClose} />
            <Tab.Navigator
                initialRouteName='MyNetworkScreen'
                screenOptions={({ route, navigation }) => ({
                    headerStyle: { height: 40 },
                    headerLeft: () => null,
                    headerTitle: () => <Header navigation={navigation} />,
                    tabBarButton: (props) =>
                        route.name === 'PostScreen' ? (
                            <TabBarButton {...props} onPress={handlePostButtonPress} />
                        ) : (
                            <TabBarButton {...props} />
                        ),

                    tabBarActiveTintColor: colors.black,
                    tabBarInactiveTintColor: colors.grey,
                    tabBarLabelStyle: {
                        marginTop: -10,
                        marginBottom: 4,
                        fontWeight: '500',
                    },
                    tabBarHideOnKeyboard: true,
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