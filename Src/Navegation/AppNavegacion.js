import { NavigationContainer} from '@react-navigation/native';
import AuthNavegacion from './AuthNavegacion'; 
import NavegacionPrincipal from './NavegacionPrincipal';

export default function AppNavegacion() {
    const Autenticado = true; // Cambia esto según el estado de autenticación
    return (
        <NavigationContainer>
            {Autenticado ? <NavegacionPrincipal /> : <AuthNavegacion />}
        </NavigationContainer>
    );
}
// Este archivo es el punto de entrada para la navegación de la aplicación.
// Importa el contenedor de navegación y las rutas de autenticación o principal según el estado de autenticación.
// Aquí se define si el usuario está autenticado o no, y se renderiza la navegación correspondiente.
// Puedes cambiar el valor de `Autenticado` para probar ambas rutas de navegación.


