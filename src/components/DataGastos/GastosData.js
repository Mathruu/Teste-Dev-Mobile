import { useEffect, useState } from 'react';

const initialExpenses = [
    { id: 1, description: 'Restaurante', amount: 200.0, category: 'Alimentação' },
    { id: 2, description: 'Transporte', amount: 150.0, category: 'Transporte' },
    { id: 3, description: 'Compras', amount: 1000.0, category: 'Compras' },
    { id: 4, description: 'Lazer', amount: 300.0, category: 'Lazer' },
    { id: 5, description: 'Aluguel', amount: 1000.0, category: 'Moradia' },
    { id: 6, description: 'Salário', amount: 10000.0, category: 'Salário' },
    { id: 7, description: 'Academia', amount: 150.0, category: 'Saúde' },
    { id: 8, description: 'Plano de Saúde', amount: 500.0, category: 'Saúde' },
    { id: 9, description: 'Seguro do Carro', amount: 200.0, category: 'Transporte' },
    { id: 10, description: 'Viagem em Família', amount: 800.0, category: 'Lazer' },
];



export const useExpenseData = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

    useEffect(() => {
        console.log('Expenses:', expenses);
    }, [expenses]);

    // Função para excluir uma despesa com base no ID
    const deleteExpense = (expenseId) => {
        // Filtrar as despesas para manter apenas aquelas com IDs diferentes do ID a ser excluído
        const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
        // Atualizar o estado das despesas com a nova lista filtrada
        setExpenses(updatedExpenses);
    };

    return { expenses, setExpenses, deleteExpense };
};