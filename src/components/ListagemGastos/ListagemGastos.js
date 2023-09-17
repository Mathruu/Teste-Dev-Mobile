import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useExpenseData } from '../DataGastos/GastosData';



function ExpenseListScreen({ navigation, route }) {

    const { expense } = useExpenseData();
    const { navigate } = useNavigation();
    const { expenses, setExpenses } = route.params;
    const [searchText, setSearchText] = useState('');

    // Filtrar despesas com base no texto de pesquisa
    const filteredExpenses = expenses.filter((expense) => {
        const categoryMatch = expense.category.toLowerCase().includes(searchText.toLowerCase());
        const amountMatch = expense.amount.toString().includes(searchText);

        return categoryMatch || amountMatch;
    });

    const handleExpenseUpdated = (updatedExpense) => {
        // Mapeie a lista de despesas existente para criar uma nova lista com a despesa atualizada
        const updatedExpenses = expenses.map((expense) => {
            if (expense.id === updatedExpense.id) {
                // Se encontrarmos uma despesa que corresponda ao ID da despesa atualizada,
                // substitua-a pela despesa atualizada
                return updatedExpense;
            }
            // Caso contrário, mantenha a despesa inalterada
            return expense;
        });

        // Atualize o estado com a nova lista de despesas
        setExpenses(updatedExpenses);
        setFilteredExpenses(updatedExpenses);

    };

    const handleDeleteExpense = (expenseId) => {
        console.log('Tentativa de exclusão de despesa com ID:', expenseId);
    
        // Filtra a lista de despesas excluindo a despesa com o ID correspondente
        const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
        setExpenses(updatedExpenses);
    
        console.log('Despesa excluída. Lista de despesas atualizada:', updatedExpenses);
    
        // Exiba uma mensagem de confirmação
        Alert.alert('Exclusão bem-sucedida', 'A despesa foi excluída com sucesso.');
    };

    useEffect(() => {
        const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
        setExpenses(updatedExpenses);
    }, [expenses]);

    useFocusEffect(
        React.useCallback(() => {
            console.log('Expenses Atualizados:', expenses);
        }, [expenses])
    );

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <Text style={styles.heading}>Listagem de Gastos</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Pesquisar categoria/valor..."
                    value={searchText}
                    onChangeText={(text) => setSearchText(text)}
                />
            </View>
            <View style={styles.horizontalLine} />
            <FlatList
                data={filteredExpenses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ExpenseEdit', { expense: item, onExpenseUpdated: handleExpenseUpdated, })}
                    >
                        <View style={styles.expenseItem}>
                            <Text>{item.category}</Text>
                            <Text>R$ {item.amount.toFixed(2)}</Text>
                            <Button
                                title="Excluir"
                                onPress={() => handleDeleteExpense(item.id)}
                                color="red"
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
                    <TouchableOpacity onPress={() => navigate('ExpenseAdd', { setExpenses })} style={styles.addButton}>
                        <Text style={styles.addButtonText}>Adicionar Gastos</Text>
                    </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'black',
    },
    expenseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
    },
    filterContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,

    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        padding: 5,
        flexDirection: 'row-reverse',
        color: 'grey',
        marginRight: 10,
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: '100%',
        marginBottom: 30,
    },
    addButton: {
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 8,
    },
    addButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },

});

export default ExpenseListScreen;