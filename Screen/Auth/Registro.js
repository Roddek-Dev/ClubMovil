import { View, Text, TextInput, StyleSheet } from "react-native";
import BotonComponent from "../../Components/BotonComponent";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export default function RegistroScreen() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleRegistro = () => {
    // Validación básica
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    if (!nombre || !apellido || !email || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Aquí iría la lógica de registro
    console.log("Registrando:", { nombre, apellido, email, password });

    // Navegar a la pantalla de asociados después del registro
    navigation.navigate("Asociados");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <BotonComponent title="Registrarse" onPress={handleRegistro} />

      <BotonComponent
        title="Ya tengo cuenta - Ir a Login"
        onPress={() => navigation.navigate("Login")}
        style={styles.secondaryButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  secondaryButton: {
    marginTop: 10,
    backgroundColor: "#ccc", // Color diferente para distinguir
  },
});
