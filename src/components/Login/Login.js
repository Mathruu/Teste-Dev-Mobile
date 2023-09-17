import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Lógica de autenticação aqui (pode ser hardcoded para fins de demonstração).
        if (email === 'a' && password === '123') {
            // Navega para a tela de listagem de gastos.
            navigation.navigate('ExpenseList');
        } else {
            setError('E-mail ou senha incorretos. Por favor, tente novamente.');
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.text}>Bem-vindo(a) ao App de Gastos!</Text>
                <Text style={styles.text}>Login</Text>
                <TextInput style={styles.inputText}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput style={styles.inputText}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button title="Entrar" onPress={handleLogin} />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#c3c4c9'
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    inputText: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
});

export default LoginScreen;