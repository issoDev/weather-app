import { StyleSheet, Platform, StatusBar } from 'react-native'
import colors from './color'

export const styles = StyleSheet.create({
  // App.js StyleSheet
  appContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
  }, 

  // LocalizedWeather.js StyleSheet
  localizedWeatherContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    height: '40%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
    
})
