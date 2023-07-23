import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterPress = () => {
    console.log('User registration data:', {
      email,
      password,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Create an Account</Text>
      <View style={styles.inputContainer}>
      <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={handleRegisterPress}
          color="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#D1DAFF',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: 'blue',
  },
  inputContainer: {
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
  buttonContainer: {
    borderWidth: 2,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 6,
    alignSelf: 'center',
    width: 130,
    marginBottom: 12,
  },
});

export default RegisterScreen;
