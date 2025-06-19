import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaAsociado from "../Screen/Asociado/EditarAsociado";
import PantallaDetallesAsociados from "../Screen/Asociado/DetalleAsociado";
import PantallaListarAsociados from "../Screen/Asociado/ListarAsociado";
import { Button } from "react-native";
const Stack = createNativeStackNavigator();

export default function AsociadoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditarAsociados"
        component={PantallaAsociado}
        options={{ title: "Editar Asociados" }}
      />
      <Stack.Screen
        name="DetallesAsociados"
        component={PantallaDetallesAsociados}
        options={{
          title: "Detalles de Asociados",
          headerRight: () => (
            <Button
              onPress={() => alert("Botón de edición deshabilitado")}
              title="Info"
              color="red"
            /> // Cambia el color del botón según tu preferencia
          ), // Ocultar el botón de edición
        }}
      />
      <Stack.Screen
        name="ListarAsociados"
        component={PantallaListarAsociados}
        options={{ title: "Listar Asociados" }}
      />
    </Stack.Navigator>
  );
}
