import { View, Text, TextInput, StyleSheet } from "react-native";
import BotonComponent from "../../../Components/BotonComponent";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla de Detalles</Text>
      <BotonComponent
        title="Devolverse"
        onPress={() => navigation.navigate("EditarAsociados")}
        style={{ marginBottom: 10 }}
      />
    </View>
  );
}
