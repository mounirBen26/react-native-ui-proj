import { View, Text, FlatList } from 'react-native'
import {useState, useEffect} from 'react'
import DetailITem from '../components/DetailITem';

export default function Details() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const fetchedData = await response.json();
        setData(fetchedData.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); // Set data to an empty array in case of an error
      }
    };

    fetchData();
  }, []);
  return (
    <View >
      <Text>Details</Text>
        <FlatList 
        data={data}
        renderItem={({item}) => <DetailITem name={item.name} cookTimeMinutes={item.cookTimeMinutes} />}
        keyExtractor={item => item.id}
        initialNumToRender={20}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        height={250}
        removeClippedSubviews={false}
        />

    </View>
  )
}