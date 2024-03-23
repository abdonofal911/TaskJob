import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/home/HomeHeader';
import WeatherCard from '../../components/home/WeatherCard';
import Colors from '../../style/Colors';
import Spacer from '../../components/shared/Spacer';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HomeHeader title="App Weather" onPress={() => navigation.goBack()} />
      <Spacer space={20} />
      <FlatList
        scrollEnabled={false}
        data={[1, 2, 3]}
        key={(item, index) => index}
        renderItem={() => <WeatherCard />}
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
