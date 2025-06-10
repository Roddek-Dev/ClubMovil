import { NavigationContainer } from "@react-navigation/native";
import AuthNavegacion from "./AuthNavegacion";
import NavegacionPrincipal from "./NavegacionPrincipal";

export default function AppNavegation() {
  const Auntenticado = true; // Cambia esto según el estado de autenticación
  return (
    <NavigationContainer>
      {Auntenticado ? <NavegacionPrincipal /> : <AuthNavegacion />}
    </NavigationContainer>
  );
}
