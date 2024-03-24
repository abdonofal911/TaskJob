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
import {useDispatch} from 'react-redux';
import {useFormik, validateYupSchema} from 'formik';
import * as Yup from 'yup';
import {signup} from '../../apis';
import {setUserInfo} from '../../redux/user';

const passwordRgx = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$';
const Signup = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const initValues = {
    username: '',
    email: '',
    password: '',
    passwordMatch: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('please enter username')
      .min(8, 'username is < 8 letters'),
    email: Yup.string()
      .required('please enter email')
      .email('please enter a valid email'),
    password: Yup.string()
      .required('please enter password')
      .matches(
        passwordRgx,
        'Minimum eight characters, at least one letter and one number',
      ),
    passwordMatch: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match',
    ),
  });

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: validationSchema,
    onSubmit: values => handleOnSubmit(values),
  });

  const handleOnSubmit = async values => {
    const response = await signup(values);
    console.log('SignUp Response ', response);
    if (response.email) {
      dispatch(setUserInfo(response));
      navigation.navigate('AppStack');
      console.log(response);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <AuthHeader
        title="Sign up to your account"
        onPress={() => navigation.goBack()}
      />
      <Spacer space={20} />
      <Input
        label={'User name'}
        placeholder="Enter your name"
        onChangeText={formik.handleChange('username')}
        value={formik.values.username}
        errorMessage={formik.touched.username && formik.errors.username}
        onBlur={() => formik.setFieldTouched('username')}
      />
      <Input
        label={'Email'}
        placeholder="Enter your email"
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        errorMessage={formik.touched.email && formik.errors.email}
        onBlur={() => formik.setFieldTouched('email')}
      />
      <Input
        label={'Password'}
        showPassword
        placeholder="Enter your password"
        autoCapitalize="none"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        errorMessage={formik.touched.password && formik.errors.password}
        onBlur={() => formik.setFieldTouched('password')}
      />
      <Input
        label={'Confirm Password'}
        showPassword
        placeholder="Enter your password"
        autoCapitalize="none"
        onChangeText={formik.handleChange('passwordMatch')}
        value={formik.values.passwordMatch}
        errorMessage={
          formik.touched.passwordMatch && formik.errors.passwordMatch
        }
        onBlur={() => formik.setFieldTouched('passwordMatch')}
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
      <AppButton title="Sign Up" onPress={formik.handleSubmit} />
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
