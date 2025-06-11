// En Screen/Prestamos/ListarPrestamos.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListarPrestamos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Préstamos</Text>
      <Text style={styles.subtitle}>Aquí aparecerán todos los préstamos registrados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    color: '#666'
  }
});