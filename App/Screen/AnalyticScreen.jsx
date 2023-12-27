import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from './Header'
import { useAppContext } from '../../Lib/AppContext'
import SetGoal from '../Components/SetGoal'
import AnalyticChart from '../Components/AnalyticChart'
import droplet from '../../assets/images/droplet.png'
import bulb from '../../assets/images/bulb.png'

export default function AnalyticScreen({option,setOption}) {
  const {state,dispatch} = useAppContext()
  console.log(state)
  if(!state.data){
    state.data='water'
  }
  const answer = {
    water:{
      img:droplet,
      cls:' bg-blue-600' ,
      color:'#00008B',
      data: [20, 45, 28,20, 45, 28],
    },
    electricity:{
      img:bulb,
      cls:' bg-yellow-400',
      color:'#8B8000',
      data: [40, 45, 38,54, 65, 18],
    }
  }

  return (
    <View className='pt-6'>
      <Header/>
      <SetGoal/>
      <View className='px-8 mt-4'>
        <Text className='text-lg font-bold'>Weekly Consumption report</Text>
        <View className='flex-row justify-between px-8 mt-4'>
      <TouchableOpacity><Text className='text-xl font-bold'>&lt;</Text></TouchableOpacity>
      <Text className='font-bold'>Weekly</Text>
      <TouchableOpacity><Text className='text-xl font-bold'>&gt;</Text></TouchableOpacity>
      </View>
        <AnalyticChart dets={answer[state.data].data} color={answer[state.data].color}/>
      </View>
    </View>
  )
}