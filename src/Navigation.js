import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Add from "./screens/Add";
import Login from "./screens/Login";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Ventas" }}
      />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{ presentation: "modal", title: "Agregar Nuevo Producto" }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
