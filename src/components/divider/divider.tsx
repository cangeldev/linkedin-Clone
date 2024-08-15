import { View } from 'react-native'
import React from 'react'
import style from './style'

export const Divider = () => {
  return (
    <View style={style.container}>
      <View style={style.containerWrap} />
    </View>
  )
}