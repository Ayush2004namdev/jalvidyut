import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import droplet from '../../assets/images/droplet.png'
import bulb from '../../assets/images/bulb.png'
import Colors from '../../Lib/Colors'
import { useNavigation } from '@react-navigation/native'
import Header from './Header'
import { useAppContext } from '../../Lib/AppContext'


export default function HomeScreen({route}) {
  const navigator = useNavigation()

  const { state, dispatch } = useAppContext();

  const handlePress = async (ans) => {
    await dispatch({type:'UPDATE_DATA',payload:ans})
  }

  return (
    <View className='pt-6'>
        <Header/>
      <View className='mt-8'>
        <Text className='text-center text-xl text-semibold'>Select To View Consuptions</Text>
      </View>
      <View className='w-full h-full mt-12 py-10 flex items-center'>
        <TouchableOpacity onPress={() => {handlePress('water');navigator.navigate('Usage')}} style={{backgroundColor:Colors.WATER_COLOR}} className='mb-14 bg-blue-600 shadow-2xl shadow-black rounded-2xl  w-40 h-40 flex justify-center items-center'>
            <Image source={droplet}/>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:Colors.LIGHT_COLOR}} onPress={() => {handlePress('electricity');navigator.navigate('Usage')}}  className=' mb-12 w-40 h-40 shadow-2xl shadow-black rounded-2xl flex justify-center items-center'>
            <Image source={bulb}/>
        </TouchableOpacity>
        <TouchableOpacity className='bg-green-400 rounded-lg mt-10 px-8 py-4'>
            <Text className='text-white font-bold'>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
       shadowOffset:20,
       shadowColor:'#000',
       shadowOpacity:2,
       shadowRadius:20
    }
})