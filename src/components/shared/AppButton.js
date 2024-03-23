import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontScale, scale, vScale} from '../../style/Scale';
import Colors from '../../style/Colors';
import Font from '../../style/Font';

const AppButton = ({title, onPress, style, textStyle, icon}) => {
  return (
    <Pressable style={[styles.container, style]} {...{onPress}}>
      <View style={styles.icon}>{icon && icon()}</View>
      <Text style={[styles.text, textStyle]}>{title}</Text>
      <View style={styles.icon} />
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: scale(353),
    height: vScale(67),
    backgroundColor: Colors.purple,
    borderRadius: vScale(8),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  text: {
    color: Colors.white,
    fontFamily: Font.Bold,
    fontSize: fontScale(20),
    textAlign: 'center',
  },
  icon: {
    width: scale(50),
  },
});
