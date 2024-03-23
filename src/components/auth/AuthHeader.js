import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {fontScale, sWidth, scale, vScale} from '../../style/Scale';
import Colors from '../../style/Colors';
import Font from '../../style/Font';

const AuthHeader = ({title, onPress}) => {
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

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(7),
    backgroundColor: Colors.purple,
    paddingHorizontal: scale(10),
    paddingVertical: vScale(40),
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    borderBottomLeftRadius: scale(20),
  },
  icon: {
    alignSelf: 'flex-start',
    borderRadius: scale(24),
    paddingVertical: scale(10),
    paddingHorizontal: scale(10),
    backgroundColor: Colors.gray,
    marginStart: scale(10),
    marginBottom: vScale(15),
  },
  title: {
    marginStart: scale(12),
    fontFamily: Font.Bold,
    fontSize: fontScale(32),
    color: Colors.white,
    width: scale(300),
  },
});
