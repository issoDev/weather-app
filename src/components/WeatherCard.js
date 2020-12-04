import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from '../../styles/styles'

export default function WeatherCard({ city, date, icon, temperature, condition }) {
  return (
    <View style={styles.weatherCardContainer}>
      <Text style={styles.cityName}> {city} </Text>
      <Text style={styles.currentDate}> {date} </Text>
      <View style={styles.tmpContainer}>
        <Image 
          style={styles.imageStyle}
          source={{ uri: icon }} 
        />
        <Text style={styles.temperature}> 
          {temperature}
          <Text style={styles.tmpSymbol}>°</Text> 
        </Text>
      </View>
      <Text style={styles.condition}>{condition}</Text>
    </View>
  )
}
