import React from 'react'
import { View } from 'react-native'

import { styles } from '../../styles/styles'
import WeatherCard from './WeatherCard'

export default function FindWeather({ result }) {
  return (
    <View style={styles.findWeatherContainer}>
      <WeatherCard result={result} />
    </View>
  )
}

