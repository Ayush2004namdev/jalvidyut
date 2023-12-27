import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Header from './Header'
import ChallangeCard from '../Components/ChallangeCard'

export default function BrowseScreen() {

  const thisWeek = [
    {
      title:'This Weeks Challenge',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
      coins:'30',
      status:'Challange Not Completed',
      cls:'bg-red-400'
    }
  ]

  const previous = [
    {
      title:'title',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
      coins:'10',
      status:'Challange Not Completed',
      cls:'bg-red-400'
    },
    {
      title:'title',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
      coins:'30',
      status:'Challange Not Completed',
      cls:'bg-green-400'
    },
    {
      title:'title',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus.',
      coins:'30',
      status:'Challange Not Completed',
      cls:'bg-red-400'
    }
  ]


  return (
    <View className='pt-6  bg-white h-screen'>
      <Header/>
      <View className='px-6 mt-2'>
        <FlatList
        data={thisWeek}
        renderItem={({item}) => (
          <ChallangeCard {...item}/>
          )}
          />
      </View>
      <View className='mt-4 px-6'>

      <FlatList
        data={previous}
        renderItem={({item}) => (
          <ChallangeCard {...item}/>
          )}
          />
      </View>
    </View>
  )
}