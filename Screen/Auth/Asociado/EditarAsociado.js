import { View, Text, TextInput, StyleSheet } from "react-native";
import BotonComponent from "../../../Components/BotonComponent";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla de Edicion</Text>
      <BotonComponent
        title="Ir a Detalles de Asociados"
        onPress={() => navigation.navigate("DetallesAsociados")}
        style={{ marginBottom: 10 }}
      />
      <BotonComponent
        title="Listar Asociados"
        onPress={() => navigation.navigate("Asociados")}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}
