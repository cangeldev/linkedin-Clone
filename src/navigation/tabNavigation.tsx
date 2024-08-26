import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'assets/colors/colors'
import { TabBarButton } from 'components'
import PostModal from 'screens/bottomTabScreens/post/postModal'
import { screens } from 'components/getIcon/getIcon'

const TabNavigation = () => {

    const Tab = createBottomTabNavigator()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModalClose = () => setIsModalVisible(false)
    const handlePostButtonPress = () => setIsModalVisible(true)

    return (
        <>
            <PostModal isVisible={isModalVisible} onClose={handleModalClose} />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarButton: (props) =>
                        route.name === 'PostScreen' ? (
                            <TabBarButton {...props} onPress={handlePostButtonPress} />
                        ) : (
                            <TabBarButton {...props} />
                        ),
                    headerShown: false,
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
}

export default React.memo(TabNavigation)
