import { View, Text, Image } from 'react-native'
import React from 'react'
import appLogo from '../../assets/images/appLogo.png'

export default function Header() {
  return (
    <View className='flex-row items-end'>
        <Image source={appLogo} />
        <Text className='mb-2 font-bold text-3xl '>Jal Vidyut</Text>
    </View>
  )
}