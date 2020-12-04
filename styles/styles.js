import { StyleSheet, Platform, StatusBar } from 'react-native'
import colors from './colors'

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
    backgroundColor: colors.lightorange,
    height: '45%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  // SearchField.js StyleSheet
  searchBackground: {
    backgroundColor: colors.lightgrey,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 25,
    marginTop: -27,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width:0, height: 3},
    shadowRadius: 7,
    shadowOpacity: 0.26,
    elevation: 7,
  },
  searchIconStyle: {
    fontSize: 27,
    marginHorizontal: 10,
    alignItems: "center"
  },
  searchInputStyle: {
    flex: 1,
    height: 30,
    fontSize: 16
  },

  // FindWeather.js StyleSheet
  findWeatherContainer: {
    marginHorizontal: 25,
    padding: 20,
  },
  infoTextStyle: {
    fontSize: 17,
    textAlign: "center"
  },
  warningTextStyle: {
    fontSize: 17,
    textAlign: "center",
    paddingTop: 25,
    color: colors.lightred
  },

  // WeatherCard.js StyleSheet
  weatherCardContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    // borderWidth: 2,
    // borderBottomColor: 'black'
  },
  cityName: {
    fontSize: 28,
    fontWeight: "800"
  },
  currentDate: {
    color: colors.grey,
    paddingTop: 5,
    fontSize: 17.5
  },
  tmpContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  imageStyle: {
    height: 100, 
    width: 100 
  },
  temperature: {
    fontSize: 55
  },
  tmpSymbol: {
    fontSize: 40,
    position: "absolute",
    top: 6
  },
  condition: {
    fontSize: 18.5,
    fontWeight: '500'
  }
});
