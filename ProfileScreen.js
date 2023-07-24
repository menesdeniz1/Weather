import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LogoBigSvg from './assets/Logo-big.svg';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const ProfileScreen = () => {
  const handleUpdateButtonPress = () => {
  };

  const onDayPress = (day) => {
    console.log('Selected day:', day);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#D1DAFF', 'white']} style={styles.background}>
        <View style={styles.logoContainer}>
          <LogoBigSvg width={40} height={40} />
          <View style={styles.deskReservContainer}>
            <Text style={styles.deskReservText}>Desk Reserv</Text>
          </View>
          <Text style={styles.myCalendarText}>My Calendar</Text>
        </View>
        <View style={styles.calendarContainer}>
          
          <CalendarList
            onDayPress={onDayPress} 
            style={styles.calendar} 
            theme={{
              backgroundColor: 'transparent',
              calendarBackground: 'transparent',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: 'blue',
              selectedDayTextColor: 'white',
              todayTextColor: 'blue',
              dayTextColor: 'black',
              textDisabledColor: 'gray',
              dotColor: 'blue',
              selectedDotColor: 'white',
              arrowColor: 'blue',
              monthTextColor: 'black',
              indicatorColor: 'blue',
              textDayFontWeight: 'bold',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 20,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>

        <TouchableOpacity style={styles.updateButton} onPress={handleUpdateButtonPress}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  logoContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 16,
  },
  deskReservContainer: {
    marginLeft: 8,
  },
  deskReservText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  calendarContainer: {
    marginTop:100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:180,
  },
  myCalendarText: {
    position: 'absolute',
    top: 16,
    left: 36,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkblue',
    marginTop: 80,
  },
  calendar: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingTop: 10,
  },
  updateButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    position: 'absolute',
    bottom: 50,
    right: 30,
    borderWidth: 1,
    borderColor: 'blue',
  },
  updateButtonText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
