import { View, Text,Image, Switch } from 'react-native'
import React from 'react'
import {BellIcon} from 'react-native-heroicons/outline';
import { useColorScheme } from 'nativewind';
export default function Headers() {
    const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-row justify-between ">
      <View>
        <Image
        source={require('../../assets/user.png')}
        style={{width: 40, height: 40}}
         />
      </View>
      <View className="flex flex-row  items-center justify-center space-x-6">
        <BellIcon size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
        <Switch value={colorScheme === 'dark'} onValueChange={toggleColorScheme} />
      </View>
    </View>
  )
}