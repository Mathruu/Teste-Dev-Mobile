import { useState } from 'react';

const initialExpenses = [
    { id: 1, description: 'Restaurante', amount: 200.0, category: 'Alimentação' },
    { id: 2, description: 'Transporte', amount: 150.0, category: 'Transporte' },
    { id: 3, description: 'Compras', amount: 1000.0, category: 'Compras' },
    { id: 4, description: 'Lazer', amount: 500.0, category: 'Lazer'},
    { id: 5, description: 'Aluguel', amount: 1000.0, category: 'Moradia'},
    { id: 6, description: 'Salário', amount: 10000.0, category: 'Salário'},
    { id: 7, description: 'Academia', amount: 150.0, category: 'Saúde'},
];

export const useExpenseData = (children) => {
    const [expenses, setExpenses] = useState(initialExpenses);

    return { expenses, setExpenses };
};