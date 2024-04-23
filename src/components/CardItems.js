import { View, Text,TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

export default function CardItems({id, name, difficulty, cuisine}) {
  const {width, height} = Dimensions.get('window')
  return (
    <TouchableOpacity className='m-2'>
    <View className="bg-orange-500  my-4  rounded-2xl flex h-full align-middle justify-center" style={{width: width * 0.5, height: height * 0.4}}>
      <Text>{id}</Text>
      <Text className="font-bold text-xl text-center text-white p-3">Recipe: {name}</Text>
      <Text className="font-bold text-l text-center text-white p-4">Difficulty: {difficulty}</Text>
      <Text className="font-bold text-l text-center text-white p-4">Cuisine From: {cuisine}</Text>
    </View>
    </TouchableOpacity>
  )
}