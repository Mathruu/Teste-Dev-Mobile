import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CreateExpense({ route, navigation }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const { navigate } = useNavigation();
    const setExpenses = route.params.setExpenses;

    const handleCreateExpense = () => {
        // Crie um novo objeto de despesa com os dados inseridos pelo usuário
        const newExpense = {
            id: Math.random().toString(),
            description,
            amount: parseFloat(amount), // Converta o valor para um número
            category,
        };

        // Adicione a nova despesa à sua lista de despesas existente
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
        // Limpe os campos de entrada após a criação da despesa
        setDescription('');
        setAmount('');
        setCategory('');
        console.log('New Expense:', newExpense);
        // Navegue de volta para a lista de despesas
        navigate('ExpenseList');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Criar Gastos</Text>
            <View style={styles.containerEdit}>
                <Text style={styles.text}> Descrição: </Text>
                <TextInput style={styles.textInput}
                    placeholder="Descrição"
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
                <Text style={styles.text}> Valor: </Text>
                <TextInput style={styles.textInput}
                    placeholder="Valor"
                    value={amount}
                    onChangeText={(text) => setAmount(text)}
                    keyboardType="numeric"
                />
                <Text style={styles.text}> Categoria: </Text>
                <TextInput style={styles.textInput}
                    placeholder="Categoria"
                    value={category}
                    onChangeText={(text) => setCategory(text)}
                />
            </View>
            <Button title="Criar Despesa" onPress={handleCreateExpense} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    containerEdit: {
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInput: {
        margin: 10,
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CreateExpense;