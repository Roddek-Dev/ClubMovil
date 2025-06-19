import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BotonComponent from ".././Components/BotonComponent";
import api from ".././src/services/api";

export default function PantallaPerfil({ navigation }) {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarPerfil = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        if (!token) {
          console.log("No se encontró token, redirigiendo al login");
          return;
        }

        console.log("Intentando cargar perfil con token:", token);
        const response = await api.get("/me");
        console.log("Respuesta del perfil:", response.data);
        setUsuario(response.data);
      } catch (error) {
        console.log("Error al cargar perfil:", error);

        if (error.isAuthError || error.shouldRedirectToLogin) {
          console.log(
            "Error de autenticación manejado por el interceptor, redirigiendo automáticamente"
          );
          await AsyncStorage.removeItem("userToken");
          return;
        }

        if (error.response) {
          console.log(
            "Error response:",
            error.response.status,
            error.response.data
          );
          Alert.alert(
            "Error del servidor",
            `Error ${error.response.status}: ${
              error.response.data.message || "No se pudo cargar el perfil"
            }`,
            [
              {
                text: "OK",
                onPress: async () => {
                  await AsyncStorage.removeItem("userToken");
                },
              },
            ]
          );
        } else if (error.request) {
          Alert.alert(
            "Error de conexión",
            "No se pudo conectar con el servidor. Verifica tu conexión a internet.",
            [
              {
                text: "OK",
                onPress: async () => {
                  await AsyncStorage.removeItem("userToken");
                },
              },
            ]
          );
        } else {
          Alert.alert(
            "Error",
            "Ocurrió un error inesperado al cargar el perfil.",
            [
              {
                text: "OK",
                onPress: async () => {
                  await AsyncStorage.removeItem("userToken");
                },
              },
            ]
          );
        }
      } finally {
        setLoading(false);
      }
    };
    cargarPerfil();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007BBC" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {usuario ? (
        <View>
          <Text>Bienvenido, {usuario.name || "Usuario"}</Text>
        </View>
      ) : (
        <Text>No se pudo cargar la información del perfil.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

if (!usuario) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <View style={styles.ContainerPerfil}>
        <Text style={styles.errorText}>
          No se pudo cargar la información del perfil
        </Text>
      </View>
    </View>
  );
}
