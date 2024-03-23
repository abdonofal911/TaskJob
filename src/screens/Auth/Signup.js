import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../style/Colors';
import Font from '../../style/Font';
import AuthHeader from '../../components/auth/AuthHeader';
import Input from '../../components/shared/Input';
import Spacer from '../../components/shared/Spacer';
import {fontScale, scale, vScale} from '../../style/Scale';
import AppButton from '../../components/shared/AppButton';
import {CheckBox} from '@rneui/themed';
import icons from '../../assets/icons';

const Signup = ({navigation}) => {
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <AuthHeader
        title="Sign up to your account"
        onPress={() => navigation.goBack()}
      />
      <Spacer space={20} />
      <Input label={'User name'} placeholder="Enter your name" />
      <Input label={'Email'} placeholder="Enter your email" />
      <Input
        label={'Password'}
        showPassword
        placeholder="Enter your password"
      />
      <Input
        label={'Confirm Password'}
        showPassword
        placeholder="Enter your password"
      />
      <View style={styles.termsRow}>
        <CheckBox
          checkedColor={Colors.gray}
          title="l accept & agree terms conditions & privacy policy"
          textStyle={styles.termsText}
          checked={check}
          onPress={() => setCheck(!check)}
        />
        <Text></Text>
      </View>
      <Spacer space={25} />
      <AppButton title="Sign Up" onPress={() => {}} />
    </View>
  );
};

export default Signup;

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
  termsRow: {
    marginStart: scale(10),
    flexDirection: 'row',
  },
  termsText: {
    marginTop: vScale(15),
    fontFamily: Font.Light,
    fontSize: fontScale(14),
    fontWeight: '400',
    paddingEnd: scale(120),
  },
});
