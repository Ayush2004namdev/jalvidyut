import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import app from '../../assets/images/app.png'
import google from '../../assets/images/google.png'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import {useWarmUpBrowser} from '../../hooks/warmUpBrowser'

WebBrowser.maybeCompleteAuthSession();


export default function LoginScreen() {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);


  return (
    <View className='w-screen h-screen '>
        <View className='flex items-center'>
            <Image className='object-contain' source={app}/>
        </View>
        <View className='flex bg-blue-400 -mt-32 pt-8 h-full items-center'>
           <Text className='text-white text-3xl font-bold mb-2'>Jal Vidyut</Text>
           <Text className='text-white text-lg font-semibold'>Manage Water and electicity in One app</Text>
           <TouchableOpacity
             onPress={onPress}
             className='bg-white px-4 py-2 rounded-full mt-8 flex-row items-center space-x-6'>
                <Image source={google} className='w-12 h-12 object-contain '/>
                <Text className='text-blue-400'>Continue with google</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
}