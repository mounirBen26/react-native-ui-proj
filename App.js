import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Headers from './src/sections/Headers';
import Cards from './src/sections/Cards';
import Details from './src/sections/Details';
import { useColorScheme } from 'nativewind';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  //loading fonts
  const [fontsLoaded,fontError] = useFonts({
    'MavenPro': require('./src/fonts/MavenPro-VariableFont_wght.ttf'),
  })
  // using splash screen to load fonts
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="flex flex-col p-5  dark:bg-neutral-900">
    
      <StatusBar style={colorScheme === 'dark'? 'light' : 'dark'} />
      <View onLayout={onLayoutRootView}>
      <View>
        <Headers />
        <Cards />
        <Details />
      </View>
      </View>
    </SafeAreaView>
  );
}


