import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import HomeHeader from '../../components/home/HomeHeader';
import WeatherCard from '../../components/home/WeatherCard';
import Colors from '../../style/Colors';
import Spacer from '../../components/shared/Spacer';
import {useDispatch, useSelector} from 'react-redux';
import {getWeatherForecast} from '../../redux/weather';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {weatherForecast, getWeatherForecastLoader} = useSelector(
    state => state.weather,
  );
  console.log('weatherForecast', weatherForecast);
  useEffect(() => {
    dispatch(getWeatherForecast('cairo'));
  }, []);
  if (getWeatherForecastLoader)
    return <ActivityIndicator size={'large'} style={{flex: 1}} />;
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HomeHeader title="App Weather" onPress={() => navigation.goBack()} />
      <Spacer space={20} />
      <FlatList
        scrollEnabled={false}
        data={weatherForecast?.forecast?.forecastday}
        key={(item, index) => index}
        renderItem={({item}) => (
          <WeatherCard
            item={item}
            locationName={weatherForecast.location.name}
          />
        )}
        ItemSeparatorComponent={() => <Spacer space={40} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {},
});
