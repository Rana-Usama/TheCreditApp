import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"

//screens
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import AboutUsScreen from './app/screens/AboutUsScreen';

//components
import AppDrawer from './app/components/common/AppDrawer';
import FaqScreen from './app/screens/FaqScreen';
import ContactUs from './app/screens/ContactUs';
import NotificationsScreen from './app/screens/NotificationsScreen';
import ShopScreen from './app/screens/ShopScreen';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {


  const HomeDrawer = () => {
    return <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: 'right' }} initialRouteName="HomeScreen" overlayColor="transparent" edgeWidth={100} drawerStyle={{ backgroundColor: Colors.white, width: "75%" }} drawerContent={(props) => <AppDrawer {...props} />}  >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Drawer.Screen name="FaqScreen" component={FaqScreen} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
      <Drawer.Screen name="ShopScreen" component={ShopScreen} />
    </Drawer.Navigator>
  }


  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


