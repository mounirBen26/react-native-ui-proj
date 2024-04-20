import { View, Text,Image } from 'react-native'
import React from 'react'
import {BellIcon} from 'react-native-heroicons/outline';
export default function Headers() {
  return (
    <View className="flex flex-row items-center justify-between">
      <View>
        <Image
        source={require('../../assets/user.png')}
        style={{width: 40, height: 40}}
         />
      </View>
      <View>
        <Text><BellIconcon size={24} color="black" /></Text>
      </View>
    </View>
  )
}