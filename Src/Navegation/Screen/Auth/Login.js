import { View, Text, TextInput, Alert } from "react-native";
import BotonComponent from "../../../Components/BotonComponent";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../Services/AuthService"; // Asegúrate de que esta ruta sea correcta
import React from "react";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await loginUser(email, password);
      if (result.success) {
        Alert.alert("¡Exito!", "Bienvenid@ ", [
          {
            text: "OK",
            onPress: () => {
              console.log("Login exitoso, redirigiendo automaticamente...");
            }
          },
        ]);
      } else {
        Alert.alert("Error de login", result.message || "Error al iniciar sesion");
      }
    } catch (error) {
      console.error("Error de login:", error);
      Alert.alert("Error", "Error al iniciar sesion");
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
        Inicio de Sesion
      </Text>
      <TextInput
        placeholder="Correo Electronico"
        style={{
          width: "80%",
          height: 40,
          borderColor: "gray",
          borderRadius: 7,
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        keyboardType="email-address" // Permite ingresar solo correos electronicos
        autoCapitalize="none" // Evita que la primera letra se capitalice
        value={email}
        onChangeText={setEmail} // Actualiza el estado del email
        editable={!loading}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={{
          width: "80%",
          height: 40,
          borderColor: "gray",
          borderRadius: 7,
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        value={password}
        onChangeText={setPassword} // Actualiza el estado de la contraseña
        editable={!loading}
      />
      <BotonComponent title="Iniciar Sesion" onPress={handleLogin} disabled={loading} />
      <Text style={{ marginVertical: 10 }}>¿No tienes cuenta?</Text>
      <BotonComponent
        title="Ir a registro"
        onPress={() => navigation.navigate("Registro")}
      />
    </View>
  );
}
