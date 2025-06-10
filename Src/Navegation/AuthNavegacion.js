import { createStackNavigator } from "@react-navigation/stack";
import PantallaLogin from '../../Screen/Auth/Login';
import PantallaRegistro from '../../Screen/Auth/Registro'; 


const Stack = createStackNavigator();

export default function AuthNavegacion() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={PantallaLogin}
        options={{ title: "Iniciar Sesion" }}
      />
      <Stack.Screen
        name="Registro"
        component={PantallaRegistro}
        options={{ title: "Registrarse" }}
      />
    </Stack.Navigator>
  );
}