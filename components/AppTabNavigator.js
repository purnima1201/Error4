import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookRequestScreen from '../screens/BookRequest';
import {AppStackNavigator} from './AppStackNavigator';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks:{
        screen:AppStackNavigator,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/request-list.png')} style={{width:20,height:20}}></Image>,
            tabBarLabel:'Donate Books'
        }
    },
    RequestBooks:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require('../assets/request-book.png')} style={{width:20,height:20}}></Image>,
            tabBarLabel:'Request Books'
        }
    }
})