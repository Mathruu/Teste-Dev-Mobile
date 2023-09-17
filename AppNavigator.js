import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/Login/Login';
import ExpenseListScreen from './src/components/ListagemGastos/ListagemGastos';
import ExpenseEditScreen from './src/components/EditarGastos/EditarGastos';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ExpenseList" component={ExpenseListScreen} />
                <Stack.Screen name="ExpenseEdit" component={ExpenseEditScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;