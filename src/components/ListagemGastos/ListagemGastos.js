import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useExpenseData } from '../DataGastos/GastosData';


function ExpenseListScreen({ navigation, route }) {

    const { expense } = useExpenseData();
    const { navigate } = useNavigation();
    const { expenses, setExpenses } = route.params;

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
    };

    useFocusEffect(
        React.useCallback(() => {
            // Coloque aqui qualquer código que você deseja executar quando a tela obtiver foco
            console.log('Tela de listagem está em foco.');
            console.log('Expenses Atualizados:', expenses);
        }, [expenses])
    );

    // useEffect(() => {
    //     // Esta função será executada sempre que expenses for atualizado
    //     console.log('Expenses Atualizados:', expenses);
    // }, [expenses]); // Certifique-se de incluir expenses como dependência

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Listagem de Gastos</Text>
            <FlatList
                data={expenses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ExpenseEdit', { expense: item, onExpenseUpdated: handleExpenseUpdated, })}
                    >
                        <View style={styles.expenseItem}>
                            <Text>{item.description}</Text>
                            <Text>R$ {item.amount.toFixed(2)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    expenseItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
    },
});

export default ExpenseListScreen;