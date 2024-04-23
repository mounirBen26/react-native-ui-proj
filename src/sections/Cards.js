import { View, Text, ScrollView } from 'react-native';
import CardItems from '../components/CardItems';
import { useState, useEffect } from 'react';

export default function Cards() {
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
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 16}} className='dark:text-white'>Recipes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data === null ? (
        <Text>Loading...</Text>
      ) : data.length === 0 ? (
        <Text>No data available</Text>
      ) : (
        data.map((item) => <CardItems
        key={item.id}
        name={item.name}
        difficulty={item.difficulty}
        cuisine={item.cuisine}
        />)
      )}
      </ScrollView>
    </View>
  );
}