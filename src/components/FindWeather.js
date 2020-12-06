import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

import { styles } from '../../styles/styles'
import WeatherCard from './WeatherCard'

export default function FindWeather({ result }) {
  const weatherIcon = () => {
    return `http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`;
  }

  return (
    <View style={styles.findWeatherContainer}>
      {
        result === null 
          ? <Text style={styles.infoTextStyle}> Add a city in the search bar above </Text>
          : (
              <View>
                <FontAwesome5 style={styles.searchLocationIcon} name="search-location" size={24} color="black" />
                <WeatherCard 
                  city={result.name}
                  icon={weatherIcon()} 
                  temperature={parseInt(result.main.temp)} 
                  condition={result.weather[0].description}
                />
              </View>
            )
      }
    </View>
  )
}

