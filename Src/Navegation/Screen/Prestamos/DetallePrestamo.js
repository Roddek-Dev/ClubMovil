// En Screen/Prestamos/DetallePrestamo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetallePrestamo() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalle del Préstamo</Text>
      <View style={styles.detailCard}>
        <Text style={styles.label}>Artículo:</Text>
        <Text style={styles.value}>[Nombre del artículo]</Text>
        
        <Text style={styles.label}>Asociado:</Text>
        <Text style={styles.value}>[Nombre del asociado]</Text>
        
        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.value}>[Fecha del préstamo]</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  detailCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 2
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    color: '#555'
  },
  value: {
    marginBottom: 5,
    color: '#333'
  }
});