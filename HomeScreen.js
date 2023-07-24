import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LogoBigSvg from './assets/Logo-big.svg';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoBigSvg width={40} height={40} />
        <Text style={styles.deskReservText}>Desk Reserv</Text>
      </View>
      
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleHeader}>Today's Schedule</Text>
        <Text style={styles.deskText}>Desk 5A-9</Text>
        <Text style={styles.dateText}>July 24, 2023</Text>
        <TouchableOpacity style={styles.changeButton}>
          <Text style={styles.changeButtonText}>CHANGE</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>BOOK A DESK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scheduleContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    borderRadius: 8,
  },
  scheduleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  deskText: {
    fontSize: 16,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 12,
  },
  changeButton: {
    borderWidth: 1,
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },
  changeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    position: 'absolute',
    bottom: 40,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
