import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/components/Login/Login';
import ExpenseListScreen from './src/components/ListagemGastos/ListagemGastos';
import ExpenseEditScreen from './src/components/EditarGastos/EditarGastos';
import ExpenseAddScreen from './src/components/CriarGastos/CriarGastos';
import { useExpenseData } from './src/components/DataGastos/GastosData';

const Stack = createStackNavigator();

export default function App() {

  const { expenses, setExpenses } = useExpenseData();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ExpenseList" component={ExpenseListScreen} initialParams={{ expenses, setExpenses }} />
          <Stack.Screen name="ExpenseEdit" component={ExpenseEditScreen} />
          <Stack.Screen name="ExpenseAdd" component={ExpenseAddScreen} initialParams={{ expenses, setExpenses }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});