import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import {fontScale, scale, vScale} from '../../style/Scale';
import Colors from '../../style/Colors';
import Font from '../../style/Font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const WeatherCard = ({item, locationName}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={images.weather} style={styles.bg}>
        <View style={styles.tempContainer}>
          <Image source={images['Partly cloudy']} style={styles.tempImage} />
          <Text style={styles.tempText}>{item.day.avgtemp_c}’</Text>
        </View>
      </ImageBackground>
      <View style={styles.footerRow}>
        <View style={styles.locationRow}>
          <MaterialIcons name="location-pin" size={16} color={Colors.orange} />
          <Text style={styles.locationText}>{locationName}</Text>
        </View>
        <View style={styles.dateRow}>
          <MaterialIcons
            name="calendar-month"
            size={16}
            color={Colors.orange}
          />
          <Text style={styles.dateText}>{item.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: vScale(160),
    alignSelf: 'center',
    marginHorizontal: scale(10),
  },
  bg: {
    width: '100%',
    height: vScale(160),
    borderTopLeftRadius: vScale(17),
    borderTopRightRadius: vScale(17),
    overflow: 'hidden',
  },
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: scale(10),
    marginTop: scale(10),
  },
  tempImage: {
    width: scale(30),
    height: scale(30),
    marginEnd: scale(7),
  },
  tempText: {
    fontSize: fontScale(16),
    color: Colors.yellow,
    fontFamily: Font.Medium,
  },
  locationText: {
    fontSize: fontScale(15),
    color: Colors.gray,
    fontFamily: Font.Light,
    marginStart: scale(5),
  },
  locationRow: {
    flexDirection: 'row',
    marginTop: vScale(5),
  },
  footerRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: scale(5),
  },
  dateRow: {
    flexDirection: 'row',
    marginTop: vScale(5),
  },
  dateText: {
    fontSize: fontScale(14),
    color: Colors.gray,
    fontFamily: Font.Regular,
    marginStart: scale(5),
  },
});
