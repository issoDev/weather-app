import { StyleSheet, Platform, StatusBar } from 'react-native'
import colors from './color'

export const styles = StyleSheet.create({
  // App.js StyleSheet
  appContainer: {
    flex: 1,
    // backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
  }
})
