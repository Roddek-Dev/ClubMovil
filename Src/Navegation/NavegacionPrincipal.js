import AsociadoStack from "/Stacks/AsociadoStack";
import ActividadStack from "/Stacks/ActividadStack";
import ParticipacionStack from "/Stacks/ParticipacionesStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function NavegacionPrincipal() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Asociados"
        component={AsociadoStack}
      />
      <Tab.Screen
        name="Actividades"
        component={ActividadStack}
      />
      <Tab.Screen
        name="Participaciones"
        component={ParticipacionStack}
      />
    </Tab.Navigator>
  );
}