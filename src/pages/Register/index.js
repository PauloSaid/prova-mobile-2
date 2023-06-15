import { StyleSheet, View, TextInput, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function Register() {

    let [username, onChangeUsername] = useState("");
    let [email, onChangeEmail] = useState("");
    let [password, onChangePassword] = useState("");
    let [confirmPassword, onChangeConfirmPassword] = useState("");

    return (
        <View style={signup.container}>
            <Text style={signup.title}>Criar conta</Text>
            <View style={signup.textInput__container}>
                <TextInput
                    style={signup.input}
                    value={username}
                    placeholder="Usuário"
                    onChangeText={onChangeUsername}
                />
                <TextInput
                    style={signup.input}
                    value={email}
                    placeholder="E-mail"
                    onChangeText={onChangeEmail}
                />
                <TextInput
                    style={signup.input}
                    value={password}
                    placeholder="Senha"
                    onChangeText={onChangePassword}
                    secureTextEntry
                />
                <TextInput
                    style={signup.input}
                    value={confirmPassword}
                    placeholder="Confirmar senha"
                    onChangeText={onChangeConfirmPassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Link
                    style={signup.signup__link}
                    to={{ screen: 'Login' }}>
                    Criar conta
                </Link>
                <Link
                    style={signup.signup__link}
                    to={{ screen: 'Login' }}>
                    Voltar
                </Link>
            </View>
        </View>
    );
}

const signup = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 20,
        backgroundColor: "#011638",
    },
    title: {
        fontSize: "calc(2rem + 2vw)",
        fontWeight: 200,
        color: "#CDCDCD",
        textAlign: 'center'
    },
    input: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#282F3B",
        color: "#CDCDCD",
    },
    signup__link: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#364156",
        color: "#CDCDCD",
    }
});