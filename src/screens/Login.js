import React from "react";
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  Image,
} from "react-native";
import { useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../config/fb";

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.dispatch(StackActions.replace("Home"));
          console.log(user.displayName);
        })
        .catch((error) => {
          Alert.alert("Porfavor ingrese una contraseña valida");
        });
    } catch {
      console.log("no se ");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/logoapp.png")}
          style={{ width: 350, height: 200, borderRadius: 5 }}
        />
      </View>

      <View>
        <Text style={styles.headingText}>Registro</Text>

        <TextInput
          style={styles.inputBox}
          placeholder="Correo"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <TextInput
          style={styles.inputBox}
          placeholder="Contraseña"
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.sign}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>
            Estas registrado
            <Text style={{ color: "blue" }}> Crear Cuenta?</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleLogin()}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>Entrar</Text>
        </TouchableOpacity>
        <Text>{message}</Text>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  headingText: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 4,
  },
  inputBox: {
    width: width - 30,
    marginVertical: 10,
    padding: 10,
    borderColor: "#9bd4fa",
    outline: "none",
    borderBottomWidth: 2,
    marginHorizontal: 6,
  },
  addButton: {
    backgroundColor: "#0c9ef3",
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  sign: {
    alignItems: "textAlign",
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 4,
  },
});
