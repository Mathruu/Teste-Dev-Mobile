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
        if (email === 'abc@gmail.com' && password === '123') {
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
                <Text style={styles.text}>Gestão de Gastos Pessoais</Text>
                <Text style={styles.textLogin}>LOGIN</Text>
                <View style={styles.horizontalLine} />
                <View style={styles.divider}>
                    <Text style={styles.credential}> Email</Text>
                    <TextInput style={styles.inputText}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={styles.credential}> Senha</Text>
                    <TextInput style={styles.inputText}
                        placeholder="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
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
        marginBotton: 10,
        backgroundColor: '#fff',
        width: '80%',
        margin: '5%',
        borderWidth: 1,
        borderColor: '#2196f3',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    inputText: {
        padding: 5,
        borderWidth: 2,
        borderColor: '#dfdfdf',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    textLogin: {
        fontSize: 17,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 10,
        color: '#2196f3',
    },
    divider: {
        marginVertical: 10,
        padding: 10,
    },
    credential: {
        color: '#2196f3',
        marginBottom: 5,
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        width: '90%',
    },
});

export default LoginScreen;