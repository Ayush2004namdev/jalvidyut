import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import droplet from '../../assets/images/droplet.png'
import bulb from '../../assets/images/bulb.png'
import { useAppContext } from '../../Lib/AppContext';

export default function SetGoal() {

    const [showWater,setShowWater] = useState(false)
  const { state, dispatch } = useAppContext();
  console.log(state)
  if(!state.data){
    setShowWater(true)
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

  const changeState =async () => {
    setShowWater(!showWater)
    showWater ? (await dispatch({type:'UPDATE_DATA',payload:'electricity'})): (await dispatch({type:'UPDATE_DATA',payload:'water'}))
  }


  return (
    <>
    <View className='w-full h-28 mt-4 flex items-center justify-center'> 
      <TouchableOpacity
          onPress={changeState}
          className={'h-20 w-20 px-4 py-4 rounded-lg flex justify-center items-center ' + answer[state.data].cls}>
        <Image style={{height:40,objectFit:'contain'}} source={answer[state.data].img}/>
      </TouchableOpacity>
    </View>
    <View className='bg-white rounded-xl mx-6 my-1 px-5 py-3'>
      <Text className='text-xl font-semibold'>Set a Goal</Text>
      <Text>Set a goal to help manage your {state.data} consumption</Text>
      <View className='bg-green-400 mx-auto rounded-lg px-12 py-2 my-2 mt-4'>
        <Text className='text-white text-center text-lg font-semibold '>Set Goal</Text>
      </View>
    </View>
</>
  )
}