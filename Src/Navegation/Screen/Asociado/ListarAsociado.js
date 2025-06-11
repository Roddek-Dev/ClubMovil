import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ListarAsociado() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Asociados</Text>
      <Text style={styles.subtitle}>
        Aquí aparecerán todos los asociados registrados
      </Text>
      
      <TouchableOpacity 
        style={[styles.button, styles.detailButton]}
        onPress={() => navigation.navigate("DetalleAsociado")}
      >
        <Text style={styles.buttonText}>Ver Detalle</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.editButton]}
        onPress={() => navigation.navigate("EditarAsociado")}
      >
        <Text style={styles.buttonText}>Editar Asociado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#2c3e50",
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: "#7f8c8d",
    marginBottom: 30,
    textAlign: 'center'
  },
  button: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: 'row',
    height: 50
  },
  detailButton: {
    backgroundColor: "#3498db", // Azul moderno
    borderWidth: 1,
    borderColor: "#2980b9"
  },
  editButton: {
    backgroundColor: "#e67e22", // Naranja cálido
    borderWidth: 1,
    borderColor: "#d35400"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5
  },
});