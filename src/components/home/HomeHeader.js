import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {fontScale, sWidth, scale, vScale} from '../../style/Scale';
import Colors from '../../style/Colors';
import Font from '../../style/Font';

const HomeHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.icon} onPress={() => (onPress ? onPress() : {})}>
        <Entypo name="chevron-left" size={24} color={Colors.white} />
      </Pressable>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: scale(7),
    backgroundColor: Colors.lightRed,
    paddingHorizontal: scale(10),
    paddingVertical: vScale(30),
    borderTopLeftRadius: scale(18),
    borderTopRightRadius: scale(18),
    borderBottomRightRadius: scale(10),
    borderBottomLeftRadius: scale(10),
  },
  icon: {
    alignSelf: 'flex-start',
    borderRadius: scale(24),
    padding: scale(10),
    backgroundColor: Colors.purple,
    marginStart: scale(10),
    marginVertical: vScale(15),
  },
  title: {
    marginStart: scale(60),
    fontFamily: Font.Bold,
    fontSize: fontScale(26),
    color: Colors.white,
  },
});
