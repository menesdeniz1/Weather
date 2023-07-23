import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  // Replace the following with your user-related data or API calls to fetch user data
  const userData = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    occupation: 'Software Engineer',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>MainScreen</Text>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{userData.name}</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.text}>{userData.age}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{userData.email}</Text>

        <Text style={styles.label}>Occupation:</Text>
        <Text style={styles.text}>{userData.occupation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  userInfoContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 10,
    width: '80%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
  },
});

export default HomeScreen;
