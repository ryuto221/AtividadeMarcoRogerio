import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { View } from "react-native-web";
import { auth } from "../config/firebase";
import styles from "../utils/style";

export default function RegisterScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // função para lidar com o registro do Usuário
  function handleRegister() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
      })
      .catch((error) => {
        console.log("Erro ao criar usuário: ", error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize o seu cadastro</Paragraph>
        <TextInput
          label={"E-mail"}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          mode="flat"
        />
        <TextInput
          label={"Senha"}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
          mode="flat"
        />
        <Button onPress={handleRegister}>Registre-se</Button>
      </View>
    </View>
  );
}
