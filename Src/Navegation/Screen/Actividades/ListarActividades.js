// En Screen/Actividades/ListarActividades.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListarActividades() {
 return (
     <View style={styles.container}>
       <Text style={styles.title}>Listado de Actividades</Text>
       <Text style={styles.subtitle}>Aquí aparecerán todos los préstamos registrados</Text>
       {/* Aquí irá tu lista de participaciones */}
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 20,
     backgroundColor: '#fff'
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