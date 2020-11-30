import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../../styles/styles'
import WeatherCard from './WeatherCard'

export default function FindWeather({ result }) {

  return (
    <View style={styles.findWeatherContainer}>
      {
        result === null
          ? <Text style={styles.infoTextStyle}> Add a city in the search bar above </Text>
          : <WeatherCard result={result} />
      }
      
    </View>
  )
}

