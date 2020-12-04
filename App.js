import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles/styles';
import weather from './src/api/weather';
import { WEATHER_API_KEY } from './src/api/apikey';
import LocalizedWeather from './src/components/LocalizedWeather';
import SearchField from './src/components/SearchField';
import FindWeather from './src/components/FindWeather';

export default function App() {
  // states
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState(null);
  const [unitsSysytem, setunitsSysytem] = useState('metric');
 
  // functions
  const fetchWeatherApi = async () => {
    try {
      const response = await weather.get(`/weather?q=${searchText}&units=${unitsSysytem}&appid=${WEATHER_API_KEY}`);
      setResult(response.data);
    } catch (error) {
        console.log(error);
    }
    
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <LocalizedWeather />
      <SearchField 
        searchText={searchText} 
        setSearchText={setSearchText}
        fetchWeatherApi={fetchWeatherApi}
      />
      <FindWeather result={result}/>
    </SafeAreaView>
  );
}

