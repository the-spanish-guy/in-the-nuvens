import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AppStack = createStackNavigator();

import Home from "./pages/Home";
//import Details from "./pages/Detail";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        {/*<AppStack.Screen name="Detail" component={Details} />*/}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
