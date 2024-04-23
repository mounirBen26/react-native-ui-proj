import { View, Text } from 'react-native'


export default function DetailITem({name,cookTimeMinutes}) {
  return (
    <View className="bg-gray-200  my-1  rounded-l  flex justify-between  flex-row  ">
      <Text className="font-bold flex  dark:text-black p-3">{name}</Text>
      <Text className="font-bold  dark:text-black p-3">{cookTimeMinutes}</Text>
    </View>
  )
}