import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnimatedMenu from './windows/Menu';
import HerramientasScreen from './windows/Herramientas'; // Importación correcta
import ScreenSplash from './windows/ScreenSplash'; // Asegúrate de que la ruta es correcta
import VideosTScreen from './windows/VideosT'; // Asegúrate de que la ruta es correcta
import PodaFloresScreen from './windows/PodaFlores'; // Asegúrate de que la ruta es correcta

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, title: 'Home'}}>
     <Stack.Screen 
        name="ScreenSplash" 
        component={ScreenSplash} 
        options={{ headerShown: false }} // Oculta el título para la pantalla Splash
      />
      <Stack.Screen 
        name="Menu" 
        component={AnimatedMenu} 
        options={{ headerShown: false }} // Oculta el título para la pantalla del menú
      />
      <Stack.Screen 
        name="Herramientas" 
        component={HerramientasScreen} 
        options={{ headerShown: false }} // Oculta el título para la pantalla de Herramientas
      />
       <Stack.Screen 
        name="Video tutoriales" 
        component={VideosTScreen} 
        options={{ headerShown: false }} // Oculta el título para la pantalla de Herramientas
      />
      <Stack.Screen 
        name="PodaFlores" 
        component={PodaFloresScreen} 
        options={{ headerShown: false }} // Oculta el título para la pantalla de Herramientas
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}