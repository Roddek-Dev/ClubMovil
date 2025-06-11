// En Screen/Participaciones/DetalleParticipacion.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalleParticipacion() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle de Participación</Text>
      {/* Contenido del detalle */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  }
});