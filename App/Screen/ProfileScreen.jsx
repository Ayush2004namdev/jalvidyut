import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import { useUser } from '@clerk/clerk-expo'
import graph from '../../assets/images/graph.png'


export default function ProfileScreen() {

  const img = {uri : 'https://img.freepik.com/free-vector/fresh-clean-water-wave-with-bubbles-drops_107791-1302.jpg?w=1380&t=st=1703746233~exp=1703746833~hmac=185cde7ff1a17643d9820c5cb99ac32048da9eec98896ced67017b3934417575'}

  const {isLoaded,isSignedIn,user}= useUser()
  return (
    <>
    <View className='pt-6 bg-white h-screen'>
    <Header/>
    <View className=''>

   <View className='flex justify-center items-center'>
    <View className='bg-green-400 h-28 w-full'>
      <Image source={img} className='h-full w-full'/>
    </View>
      <View className='flex-row relative space-x-2 -mt-8'>
        <View className='flex items-center space-y-1'>
          <Image className='w-20 h-20 rounded-full' source={{uri:user.imageUrl}}/>
          <Text className='text-center text-lg font-bold'>{user.fullName}</Text>
          <Text className='text-center text-md '>{user.emailAddresses[0].emailAddress}</Text>
        </View>
      </View>
   </View>
    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'white'
  },
  bcg:{
    
  }
})