import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from 'assets/colors/colors'
import { TabBarButton } from 'components'
import { screens } from 'components/getTabBarIcon/getTabBarIcon'
import PostModal from 'screens/bottomTabScreens/post/postModal'


const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)

    return (
        <>
            <PostModal
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            />

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarButton: (props) => {
                        if (route.name === "PostScreen") {
                            return (
                                <TabBarButton
                                    {...props}
                                    onPress={() => setIsModalVisible(true)}
                                />
                            )
                        }
                        return <TabBarButton {...props} />
                    },
                    headerShown: false,
                    tabBarActiveTintColor: colors.black,
                    tabBarInactiveTintColor: colors.grey,
                    tabBarLabelStyle: {
                        marginTop: -10,
                        marginBottom: 4,
                        fontWeight: '500',
                    },
                    tabBarHideOnKeyboard: true
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
