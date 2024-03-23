import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {fontScale, scale, vScale} from '../../style/Scale';
import Font from '../../style/Font';
import Colors from '../../style/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Entypo';

const Input = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry,
  onBlur,
  errorMessage,
  onEndEditing,
  onFocus,
  autoCapitalize,
  password,
  showPassword,
  icon,
  email,
  ...rest
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const toggleSwitch = ({}) => {
    setHidePassword(previousState => !previousState);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon ? (
          password ? (
            <Feather name="lock" size={20} />
          ) : (
            <FontAwesome name="envelope-o" size={20} />
          )
        ) : (
          <View style={{width: scale(20)}} />
        )}
        <TextInput
          {...{
            onChangeText,
            value,
            placeholder,
            onBlur,
            onEndEditing,
            onFocus,
            autoCapitalize,
          }}
          {...rest}
          style={styles.input}
          secureTextEntry={hidePassword}
        />
        {showPassword && (
          <Icon
            name={hidePassword ? 'eye' : 'eye-with-line'}
            onPress={toggleSwitch}
            size={20}
          />
        )}
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(25),
    marginTop: vScale(25),
  },
  label: {
    paddingHorizontal: vScale(5),
    backgroundColor: Colors.white,
    zIndex: 1000,
    top: vScale(-8),
    left: scale(15),
    position: 'absolute',
    color: Colors.black,
    fontFamily: Font.Medium,
    fontSize: fontScale(13),
    marginBottom: vScale(10),
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: Colors.border,
    alignItems: 'center',
    borderRadius: vScale(5),
    paddingHorizontal: scale(10),
    paddingEnd: scale(20),
  },
  input: {
    paddingStart: scale(10),
    paddingVertical: vScale(20),
    fontSize: fontScale(14),
    color: Colors.black,
    fontFamily: Font.Regular,
    flex: 1,
  },
  errorMessage: {
    fontFamily: Font.Light,
    color: Colors.red,
    fontSize: fontScale(12),
    marginTop: vScale(5),
    textAlign: 'left',
  },
});
