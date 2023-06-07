import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, ListPlants } from '../pages';

const Stack = createNativeStackNavigator();


const Routes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ListPlants" component={ListPlants} />

        </Stack.Navigator>
    )
}

export default Routes;