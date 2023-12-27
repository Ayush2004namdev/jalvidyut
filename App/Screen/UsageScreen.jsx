import { Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import Header from './Header'
import droplet from '../../assets/images/droplet.png'
import bulb from '../../assets/images/bulb.png'
import { useEffect, useState } from 'react'
import { useAppContext } from '../../Lib/AppContext'
import ChartComponent from '../Components/ChartComponent'
import SetGoal from '../Components/SetGoal'

export default function UsageScreen({route}) {
  const [showWater,setShowWater] = useState(true)
  const { state, dispatch } = useAppContext();
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

  const changeState =async () => {
    setShowWater(!showWater)
    showWater ? (await dispatch({type:'UPDATE_DATA',payload:'electricity'})): (await dispatch({type:'UPDATE_DATA',payload:'water'}))
  }

  console.log(answer[state.data].data)
  return (
    <View className='pt-6 bg-white'>
      <Header/>
      <SetGoal/>
    <ScrollView  className='px-8 mt-4 py-2'>
      <Text>Todays Consumption</Text>
      <View className='flex-row justify-between px-8 mt-4'>
      <TouchableOpacity><Text className='text-xl font-bold'>&lt;</Text></TouchableOpacity>
      <Text>Today</Text>
      <TouchableOpacity><Text className='text-xl font-bold'>&gt;</Text></TouchableOpacity>
      </View>
      <ChartComponent dets={answer[state.data].data} color={answer[state.data].color}/>
    </ScrollView>
    </View>
  )
}