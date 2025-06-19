import AsociadoStack from "./Stacks/AsociadoStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export default function NavegacionPrincipal() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Asociados"
        component={AsociadoStack}
      />
    </Tab.Navigator>
  );
}