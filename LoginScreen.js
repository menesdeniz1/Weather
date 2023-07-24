import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import LogoBigSvg from './assets/Logo-big.svg';
import IconAction from './assets/visibility_24px.svg';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password for email:', email);
  };

  return (
    <LinearGradient colors={['#D1DAFF', 'white']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appText}>Desk Reserv</Text>
        <View style={styles.imageContainer}>
          <LogoBigSvg width={120} height={120} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.passwordInput}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.iconAction}>
              <IconAction width={20} height={20} onPress={() => setShowPassword(!showPassword)} />
            </View>
          </View>
          <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>
            Forgot Password?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="LOGIN" onPress={handleLoginPress} color="white" />
        </View>
        <View style={styles.smallButtonContainer}>
          <Button
            title="Create an Account"
            onPress={() => navigation.navigate('Register')}
            color="blue"
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 16,
  },
  background: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: 'blue',
  },
  appText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: 'blue',
  },
  imageContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 32,
    marginRight: 32,
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
    paddingLeft: 12,
  },
  passwordInput: {
    position: 'relative',
  },
  iconAction: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -15 }],
  },
  buttonContainer: {
    borderWidth: 2,
    backgroundColor: 'blue',
    borderRadius: 60,
    padding: 6,
    alignSelf: 'center',
    width: 200,
    marginBottom: 12,
  },
  smallButtonContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  forgotPasswordText: {
    fontSize: 12,
    textAlign: 'right',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
