import React, {useEffect}from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function MenuButton(props) {
  const { title, onPress, source, isSelected } = props;
  
  // Variable animada para la rotación
  const rotation = useSharedValue(0);
  // Crear una variable animada para la opacidad del texto
  const textOpacity = useSharedValue(isSelected ? 1 : 0);

  // Crear una animación que cambie la rotación
  const animatePress = () => {
    rotation.value = withTiming(rotation.value + 360, { duration: 1400, easing: Easing.inOut(Easing.ease) });
  };

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotation.value % 360}deg` }
      ]
    };
  });

  useEffect(() => {
    textOpacity.value = withTiming(isSelected ? 1 : 0, { duration: 300 });
}, [isSelected]);

const textAnimatedStyle = useAnimatedStyle(() => {
  return {
    opacity: textOpacity.value
  };
});

const determineTextColor = (title) => {
  switch(title) {
    case 'Opciones':
      return 'red';
    case 'Libreta':
      return 'purple';
    case 'Videos T':
      return 'green';
    case 'Proxi':
      return 'blue';
    default:
      return 'black'; // Color por defecto
  }
};

return (
  <TouchableHighlight 
      onPress={() => {
        animatePress();
        onPress();
      }} 
      style={styles.btnClickContain} 
      underlayColor="rgba(128, 128, 128, 0.1)">
    <View style={styles.btnContainer}>
      <Animated.Image source={source} style={[styles.btnIcon, iconAnimatedStyle]} />
      {/* Mostrar el texto con animación de opacidad */}
      <Animated.Text style={[styles.btnText, textAnimatedStyle, {color: determineTextColor(title)}]}>{title}</Animated.Text>

    </View>
  </TouchableHighlight>
);
}


MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};
