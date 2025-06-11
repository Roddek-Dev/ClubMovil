import { View, Text, TextInput, Alert } from 'react-native';
import BotonComponent from '../../Components/BotonComponent';
import React from 'react';

export default function RegistroScreen({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const handlePress = () => {
      Alert.alert('¡Te has registrado con exito!', 'Bienvenid@ ');
    };

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>Registro</Text>
      <TextInput
        placeholder="Nombre"
        style={{ width: '80%', height: 40, borderColor: 'gray', borderRadius:7, borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        vaue={name}
        onChangeText={setName} // Actualiza el estado del nombre
      />
      <TextInput
        placeholder="Correo Electronico"
        style={{ width: '80%', height: 40, borderColor: 'gray', borderRadius:7, borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        keyboardType='email-address' // Permite ingresar solo correos electronicos
        autoCapitalize='none' // Evita que la primera letra se capitalice
        value={email}
        onChangeText={setEmail} // Actualiza el estado del email
      />
      <TextInput
        placeholder="Telefono"
        style={{ width: '80%', height: 40, borderColor: 'gray', borderRadius:7, borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        keyboardType='phone-pad' // Permite ingresar solo numeros de telefono
        value={phone}
        onChangeText={setPhone} // Actualiza el estado del telefono
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true} //Oculta la contraseña
        style={{ width: '80%', height: 40, borderColor: 'gray', borderRadius:7, borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        value={password}
        onChangeText={setPassword} // Actualiza el estado de la contraseña
      />
      <TextInput
        placeholder="Confirmar Contraseña"
        secureTextEntry={true} //Oculta la contraseña
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, borderRadius:7, marginBottom: 20, paddingHorizontal: 10 }}
        value={confirmPassword}
        onChangeText={setConfirmPassword} // Actualiza el estado de la confirmación de contraseña
      />
      <BotonComponent
        title="Registrarse"
        onPress={handlePress}
      />
      <Text style={{ marginVertical: 10 }}>¿Ya tienes cuenta?</Text>
      <BotonComponent
        title="Iniciar Sesion"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

