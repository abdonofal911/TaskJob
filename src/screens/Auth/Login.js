import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../style/Colors';
import Font from '../../style/Font';
import AuthHeader from '../../components/auth/AuthHeader';
import Input from '../../components/shared/Input';
import Spacer from '../../components/shared/Spacer';
import {fontScale, scale, vScale} from '../../style/Scale';
import AppButton from '../../components/shared/AppButton';
import icons from '../../assets/icons';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <AuthHeader title="Sign in to your account" />
      <Spacer space={20} />
      <Input label={'Email'} icon email />
      <Input label={'Password'} icon password />
      <Spacer space={15} />
      <Pressable style={styles.forgotPasswordRow}>
        <Text
          style={styles.forgotPassword}
          onPress={() => {
            console.log('Forgot Password');
          }}>
          Forgot Password?
        </Text>
      </Pressable>
      <AppButton title="Sign In" onPress={() => {}} />
      <View style={styles.orRow}>
        <Text
          style={styles.orText}
          onPress={() => navigation.navigate('Signup')}>
          Or
        </Text>
      </View>
      <View style={styles.socialOptionsRow}>
        <Pressable style={styles.socialOptionItem} onPress={() => {}}>
          <Image source={icons.google} style={styles.socialOptionImage} />
        </Pressable>
        <Pressable style={styles.socialOptionItem} onPress={() => {}}>
          <Image source={icons.facebook} style={styles.socialOptionImage} />
        </Pressable>
        <Pressable style={styles.socialOptionItem} onPress={() => {}}>
          <Image source={icons.twitter} style={styles.socialOptionImage} />
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontFamily: Font.Bold,
  },
  forgotPasswordRow: {
    marginHorizontal: scale(25),
    marginBottom: vScale(25),
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  forgotPassword: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.bla,
    textAlign: 'left',
  },
  orRow: {
    marginTop: vScale(20),
    marginHorizontal: scale(30),
    borderTopWidth: StyleSheet.hairlineWidth * 2,
    borderColor: Colors.gray,
    alignItems: 'center',
  },
  orText: {
    position: 'absolute',
    top: vScale(-9),
    paddingHorizontal: scale(10),
    fontFamily: Font.Bold,
    fontSize: fontScale(16),
    backgroundColor: Colors.white,
  },
  socialOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vScale(30),
  },
  socialOptionItem: {
    borderWidth: vScale(0.8),
    padding: scale(7),
    borderColor: Colors.lightGray,
    borderRadius: vScale(8),
    marginHorizontal: scale(10),
  },
  socialOptionImage: {
    width: scale(40),
    height: scale(40),
  },
});
