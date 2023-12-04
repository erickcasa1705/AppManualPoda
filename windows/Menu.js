import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';

import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import { useFocusEffect } from '@react-navigation/native';

import { BlurView, blurOpacity } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
const CirculoAzulGif = require('../img/CirculoAzul.gif');
const CirculoAzulImg = require('../img/CirculoAzul-0.png');
const CirculoPurpuraGif = require('../img/CirculoPurpura.gif');
const CirculoPurpuraImg = require('../img/CirculoPurpura-0.png');
const CirculoRojoGif = require('../img/CirculoRojo.gif');
const CirculoRojoImg = require('../img/CirculoRojo-0.png');
const CirculoVerdeGif = require('../img/CirculoVerde.gif');
const CirculoVerdeImg = require('../img/CirculoVerde-0.png');
const MenuHamburguesa = require('../img/MenuHambuerguesa.png');
const RegresarMenu = require('../img/RegresarMenu.png');
const icons = {
  opciones: {
    
    gif: CirculoRojoGif,
    img: CirculoRojoImg
  },
  libreta: {
    gif: CirculoPurpuraGif,
    img: CirculoPurpuraImg
  },
  videos: {
    gif: CirculoVerdeGif,
    img: CirculoVerdeImg
  },
  proximamente: {
    gif: CirculoAzulGif,
    img: CirculoAzulImg
  },
};


const FlechaMenu = require('../img/FlechaMenu.png');
const screenWidth = Dimensions.get('window').width;

export default function AnimatedMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [previousActiveItem, setPreviousActiveItem] = useState(null);
  const menuAnim = useRef(new Animated.Value(0)).current;
  const menuIcon = menuVisible ? RegresarMenu : MenuHamburguesa;
  const toggleMenu = () => {
    Animated.timing(menuAnim, {
      toValue: menuVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setMenuVisible(!menuVisible);
  };
  const [lastSelectedItem, setLastSelectedItem] = useState(null);

  const handleSetActiveItem = (itemName) => {
    setLastSelectedItem(activeItem); // Guarda el ítem anterior
    setActiveItem(itemName); // Establece el nuevo ítem activo
  }

  
  const menuStyle = menuAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, 0],
  });

  const blurOpacity = menuAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // Controla la opacidad del BlurView
  });

  const arrowStyle = menuAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-375, screenWidth - 50], // Cambia 10 a otro valor si lo necesitas
});



const navigation = useNavigation();

// Restablece el ítem activo cada vez que la pantalla gana foco
useFocusEffect(
  React.useCallback(() => {
    setActiveItem(null);
    setLastSelectedItem(null);
    return () => {};
  }, [])
);


  return (
    <View style={[styles.container, { marginTop: Constants.statusBarHeight }]}>
      <View style={styles.mainContent}>
      <Text style={[styles.centeredText, { color: "green" }, { fontWeight: "bold" }, { fontSize: 35 , marginTop:"-10%"}]}>B I E N V E N I D O</Text>
          <Text style={[styles.centeredText, { color: "green" }, { fontSize: 17 }]}>Descubre cómo podar un árbol</Text>
          <View style={{ height: 40 }}></View>
        <Image style={styles.arbolmenu} source={require('../img/ArbolFrutos.png')} />

      </View>

      <Animated.View style={[StyleSheet.absoluteFill, styles.blurContainer, { opacity: blurOpacity }]}>
        <BlurView
          tint="light"
          intensity={85}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      <Animated.View style={[styles.menu, { transform: [{ translateX: menuStyle }] }]}>
      <View style={styles.menuOptions}>
      <View style={styles.transparentColumn}></View>
        <View style={styles.grayColumn}></View>
        <MenuItem title="Opciones" iconName="opciones" setActive={handleSetActiveItem}
            active={activeItem}
            lastSelected={lastSelectedItem}
            menuVisible={menuVisible} color="#b20000" />
        <MenuItem title="Herramientas" iconName="libreta" setActive={handleSetActiveItem}
            active={activeItem}
            lastSelected={lastSelectedItem}
            menuVisible={menuVisible} color="#60249c" />
        <MenuItem title="Video tutoriales" iconName="videos" setActive={handleSetActiveItem}
            active={activeItem}
            lastSelected={lastSelectedItem}
            menuVisible={menuVisible} color="#4b6100" />
        <MenuItem title="Próximamente" iconName="proximamente" setActive={handleSetActiveItem}
            active={activeItem}
            lastSelected={lastSelectedItem}
            menuVisible={menuVisible} color="#006092" />
      </View>
    </Animated.View>
    <TouchableOpacity
        style={menuVisible ? styles.regresarMenuButton : styles.menuHamburguesaButton}
        onPress={toggleMenu}>
        <Image
          source={menuVisible ? RegresarMenu : MenuHamburguesa}
          style={menuVisible ? styles.regresarMenuIcon : styles.menuHamburguesaIcon}
        />
      </TouchableOpacity>
      </View>
  );
}

const MenuItem = ({ title, iconName, setActive, active, lastSelected, menuVisible, color }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const navigation = useNavigation();
  
    useEffect(() => {
      let timer;
      if (isPlaying) {
        timer = setTimeout(() => {
          setIsPlaying(false);
          if (iconName === 'libreta') {
            navigation.navigate('Herramientas');
          }
          if (iconName === 'videos') {
            navigation.navigate('Video tutoriales');
          }
        }, 1000);
      }
      return () => clearTimeout(timer);
    }, [isPlaying, iconName, navigation]);
  
    useEffect(() => {
      // Inicia el GIF si este ítem es el seleccionado actualmente o fue el último seleccionado
      if (iconName === active || iconName === lastSelected) {
        setIsPlaying(true);
      }
    }, [active, lastSelected, iconName]);
  
    const handlePress = () => {
      setActive(iconName);
    };
  
    const shouldPlayGif = isPlaying && (iconName === active || iconName === lastSelected);
    let iconSource = shouldPlayGif ? icons[iconName].gif : icons[iconName].img;
    let showGradientAndText = menuVisible && (!active || active === iconName);
  
    return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
      <View style={styles.menuItem}>
        {showGradientAndText && (
          <LinearGradient
            colors={['white', 'white', 'transparent', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[1, 0, 0, 0]}
            style={styles.transparentBarGradient}
          />
        )}
        <Image source={iconSource} style={styles.menuIcon} />
        {showGradientAndText && (
          <Text style={[styles.menuItemText, { color: color }]}>{title}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  grayColumn: {
    position: 'absolute',
    top: -15,
    bottom: -25,
    width: 155,
    backgroundColor: '#E0E0E0',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: -1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  blurContainer: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 50,
    width: screenWidth,
    zIndex: 2,
    paddingTop: 100,
  },
  menuIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  menuOptions: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 100,
    zIndex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: -19,
    zIndex: 0,
    position: 'relative',
  },
  iconContainer: {
    borderRadius: 20,
    padding: 0,
    marginRight: 10,
  },
  menuIcon: {
    width: 175,
    height: 175,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  flechaMenuIcon: {
    width: 400,
    height: 100,
    resizeMode: 'contain',
  },
  menuItemText: {
    fontSize: 27,
    width: 400,
    marginLeft: -15,
  },
  toggleButton: {
    position: 'absolute',
    top: '3%',
    left: 10,
    zIndex: 10,
  },
  transparentBar: {
    position: 'absolute',
    left: 10,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
  },
  transparentBarGradient: {
    position: 'absolute',
    left: 20,
    right: 0,
    top: 24,
    bottom: 24,
    borderRadius: 25,
  },
  menuHamburguesaButton: {
    position: 'absolute',
    top: '7%', // Ajusta este valor si es necesario para el ícono de hamburguesa
    right: '5%', // Posición desde el lado derecho de la pantalla
    zIndex: 30, // Asegurarse de que esté sobre otros elementos
  },
  menuHamburguesaIcon: {
    width: 50, // Ajusta el tamaño según tu necesidad para hamburguesa
    height: 30, // Ajusta el tamaño según tu necesidad para hamburguesa
  },
  regresarMenuButton: {
    // Los mismos estilos que menuHamburguesaButton si los botones tienen el mismo posicionamiento
    position: 'absolute',
    top: '8%',
    right: 0,
    zIndex: 30,
  },
  regresarMenuIcon: {
    width: 30, // Ajusta el tamaño si el botón de regresar es diferente
    height: 85, // Ajusta el tamaño si el botón de regresar es diferente
  },
  arbolmenu:{
    width: '90%', // Ajusta el tamaño si el botón de regresar es diferente
    height: '40%',
  },
});
