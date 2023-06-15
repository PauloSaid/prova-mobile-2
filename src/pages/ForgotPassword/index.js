import { StyleSheet, Text, View, TextInput } from "react-native";;
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function ForgotPassword() {

    let [email, onchangeEmail] = useState("");

    return (
        <View style={forgotPassword.container}>
            <Text style={forgotPassword.title}>Esqueceu a senha?</Text>
            <View>
                <Text style={forgotPassword.text}>Por favor, nos informe o seu e-mail.</Text>
                <TextInput
                    style={forgotPassword.input}
                    value={email}
                    placeholder="E-mail"
                    onChangeText={onchangeEmail}
                />
            </View>
            <Link
                style={forgotPassword.signin__link}
                to={{ screen: 'Login' }}>
                Enviar confirmação
            </Link>
            <View>
                <Text style={forgotPassword.text}>Não tem uma conta?</Text>
                <Link
                    style={forgotPassword.signup__link}
                    to={{ screen: 'Register' }}>
                    Registre-se!
                </Link>
            </View>

        </View>
    );
}

const forgotPassword = StyleSheet.create({
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
        textAlign: 'center',
    },
    text: {
        marginBottom: "calc(1rem + 1vw)",
        fontSize: "calc(1rem + 1vw)",
        fontWeight: 200,
        textAlign: "center",
        color: "#CDCDCD",
    },
    input: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#282F3B",
        color: "#CDCDCD",
    },
    signin__link: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#364156",
        color: "#CDCDCD",
    },
    signup__link: {
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        color: "#CDCDCD",
    },
});