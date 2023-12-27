import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function ChallangeCard({title,description,cls,status,coins}) {
  return (
    <View className='bg-gray-100 rounded-lg mb-2  px-4 py-3'>
        <View className='flex-row justify-between mb-2'>
            <Text className='text-lg font-bold'>{title}</Text>
            <View className='flex-row items-center space-x-2'>
                <FontAwesome5 name="bitcoin" size={30}/>
                <Text>{coins}</Text>
            </View>
        </View>
        <View>
            <Text>{description}</Text>
        </View>
        <View className={'mx-auto mt-2 px-3 py-2 rounded-xl ' + cls}>
            <Text className='text-white'>{status}</Text>
        </View>
    </View>
  )
}