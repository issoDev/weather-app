import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../styles/styles'

export default function WeatherCard({ result }) {
  return (
    <View style={styles.weatherCardContainer}>
      <Text style={styles.cityName}> {result.city} </Text>
      <Text style={styles.currentDate}> {result.date} </Text>
      <View style={styles.tmpContainer}>
        <Image 
          style={styles.imageStyle}
          source={{ uri: result.icon }} 
        />
        <Text style={styles.temperature}> 
          {result.temperature}
          <Text style={styles.tmpSymbol}>°</Text> 
        </Text>
      </View>
      <Text style={styles.condition}>{result.condition}</Text>
    </View>
  )
}
