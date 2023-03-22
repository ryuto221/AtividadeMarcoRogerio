import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, View } from "react-native-web";
import AboutScreen from "./screens/AboutScreen";
import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SplashScreen from "./screens/SplashScreen";
import StarScreen from "./screens/StarScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headershown: false,
          }}
        />
        <Stack.Screen
          name="TabsNav"
          component={TabsNavigation}
          options={{
            headershown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Tela Inicial",
          }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{
            titte: "Tela Sobre",
          }}
        />
        <Stack.Screen
          name="StarScreen"
          component={StarScreen}
          options={{
            title: "Tela Favoritos",
          }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{
            title: "Tela Detalhes",
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Tela Login",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
  return (
    <tabs.Navigator>
      <tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Tela Inicial",
        }}
      />
      <tabs.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: "Tela Sobre",
        }}
      />
      <tabs.Screen
        name="StarScreen"
        component={StarScreen}
        options={{
          title: "Tela Favoritos",
        }}
      />
      <tabs.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Tela Registro",
        }}
      />
    </tabs.Navigator>
  );
}
