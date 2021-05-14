import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import SearchResultsTabNavigator from './SearchResultsTabNavigator';
import SearchResultsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <Stack.Navigator>
            
            <Stack.Screen
                name={'Welcome'}
                component={Home}
                options={{
                    headerShown: false,
                }}
            
            />
            <Stack.Screen   
                name={'SearchResultsTabNavigator'}
                component={SearchResultsTabNavigator}
                options={{
                    title: 'Search your destination'
                    
                }}
            />
            
        </Stack.Navigator>
    );
}

export default Router;