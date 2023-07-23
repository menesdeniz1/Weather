// **** Navigation component ****
import React from 'react'; 
import {
    View,
    Button,
    Text, 
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Screen1 from './DrawerScreens/Screen1'; 
import Screen2 from './DrawerScreens/Screen2'; 
import Screen3 from './DrawerScreens/Screen3';

const Drawer = createDrawerNavigator();

function Navigation() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Screen1} />
            <Drawer.Screen name="Settings" component={Screen2} />
            <Drawer.Screen name="Contacts" component={Screen3} />
        </Drawer.Navigator>
    ); 
}

export default Navigation;