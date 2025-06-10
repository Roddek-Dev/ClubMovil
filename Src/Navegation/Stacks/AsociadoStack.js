import { createstackNavigator } from '@react-navigation/stack';
import PantallaAsociado from '../../Screen/Auth/Asociado/EditarAsociado';
import PantallaDetallesAsociados from '../../Screen/Auth/Asociado/DetalleAsociados';
import PantallaListarAsociados from '../../Screen/Auth/Asociado/ListarAsociados';
const Stack = createstackNavigator();

export default function AsociadoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EditarAsociados"
        component={PantallaAsociado}
        options={{ title: 'Editar Asociados' }}
      />
      <Stack.Screen
        name="DetallesAsociados"
        component={PantallaDetallesAsociados}
        options={{ title: 'Detalles de Asociados' }}
      />
      <Stack.Screen
        name="ListarAsociados"
        component={PantallaListarAsociados}
        options={{ title: 'Listar Asociados' }}
      />
    </Stack.Navigator>
  );
}