import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useExpenseData } from '../DataGastos/GastosData';



function ExpenseEditScreen({ route, navigation }) {
    // Obtenha os detalhes do gasto dos parâmetros de navegação
    const { expense, onExpenseUpdated } = route.params;
    const { expenses, setExpenses, deleteExpense } = useExpenseData();
    const { navigate } = useNavigation();


    // Crie estados locais para os campos editáveis
    const [editedExpense, setEditedExpense] = useState({
        description: expense.description,
        amount: expense.amount.toString(),
        category: expense.category,
    });

    // Função para salvar as alterações
    const saveChanges = () => {
        // Crie um novo objeto de despesa com as alterações feitas pelo usuário
        const updatedExpense = {
            id: expense.id,
            description: editedExpense.description,
            amount: parseFloat(editedExpense.amount),
            category: editedExpense.category,
        };

        // Atualize a fonte de dados com o novo objeto de despesa
        const updatedExpenses = expenses.map((item) =>
            item.id === expense.id ? updatedExpense : item
        );

        console.log('Updated Expenses:', updatedExpenses);

        setExpenses(updatedExpenses); // Atualize o estado com as despesas atualizadas
        onExpenseUpdated(updatedExpense); // Atualize a lista de despesas na tela de listagem
        navigate('ExpenseList'); // Volte para a tela de listagem
    };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Editar Gastos</Text>
            <View style={styles.containerEdit}>
                <Text style={styles.text}> Descrição: </Text>
                <TextInput style={styles.textInput}
                    placeholder="Descrição"
                    value={editedExpense.description}
                    onChangeText={(text) =>
                        setEditedExpense({ ...editedExpense, description: text })
                    }
                />
                <Text style={styles.text}> Valor: </Text>
                <TextInput style={styles.textInput}
                    placeholder="Valor"
                    value={editedExpense.amount}
                    onChangeText={(text) =>
                        setEditedExpense({ ...editedExpense, amount: text })
                    }
                    keyboardType="numeric"
                />
                <Text style={styles.text}> Categoria: </Text>
                <TextInput style={styles.textInput}
                    placeholder="Categoria"
                    value={editedExpense.category}
                    onChangeText={(text) =>
                        setEditedExpense({ ...editedExpense, category: text })
                    }
                />
            </View>
            <View style={styles.buttons}>
                    <Button title="Salvar Alterações" onPress={saveChanges} />
            </View>
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

export default ExpenseEditScreen;