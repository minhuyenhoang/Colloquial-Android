import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Filter from '../screens/Filter';
import FilteredMedia from '../screens/FilteredMedia';
import WriteReview from '../screens/WriteReview';
import Review from '../screens/Review';
import SelectLanguage from '../screens/SelectLanguage';
import SelectedMedia from '../screens/SelectedMedia';

const Stack = createStackNavigator();

export default function MediaNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SelectLanguage' component={SelectLanguage} />
            <Stack.Screen name='Filter' component={Filter}/>
            <Stack.Screen name='FilteredMedia' component={FilteredMedia} />
            <Stack.Screen name='SelectedMedia' component={SelectedMedia} />
            <Stack.Screen name='WriteReview' component={WriteReview} />
        </Stack.Navigator>
    )
}