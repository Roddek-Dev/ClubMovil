import { View, Text, TextInput, StyleSheet } from "react-native";
import BotonComponent from "../../../Components/BotonComponent";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla de Listar Asociados</Text>
      <BotonComponent
        title="Ir a Editar Asociados"
        onPress={() => navigation.navigate("EditarAsociados")}
        style={{ marginBottom: 10 }}
      />
      <BotonComponent
        title="Devolverse"
        onPress={() => navigation.navigate("Registro")}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}
