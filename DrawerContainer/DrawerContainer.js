import React, { useState } from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function DrawerContainer(props) {
  const { navigation } = props;
  const [selectedIcon, setSelectedIcon] = useState("HOME");
  const [lastClicked, setLastClicked] = useState("HOME");
  const [topRightImage, setTopRightImage] = useState(require("../../../assets/icons/IconoHojaRoja.png"));
  const imageOpacity = useSharedValue(0);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
        opacity: imageOpacity.value
    };
  });

  const handlePress = (routeName, iconName, image) => {
    if (lastClicked === iconName) {
        navigation.navigate(routeName);
        navigation.closeDrawer();
        setLastClicked(null);
        setTopRightImage(null);
    } else {
        setLastClicked(iconName);
        setSelectedIcon(iconName);
        setTopRightImage(image);

        // Reiniciar la opacidad a 0 inmediatamente
        imageOpacity.value = 0;

        // Usar setTimeout para introducir un pequeño retardo y luego iniciar la animación
        setTimeout(() => {
            imageOpacity.value = withTiming(1, { duration: 1000 });
        }, 50);
    }
};



  return (
    <View style={styles.content}>
      {topRightImage && (
        <Image source={topRightImage} style={styles.topRightImage} />
      )}
      <View style={styles.container}>
      <MenuButton
  title="Opciones"
  source={require("../../../assets/icons/IconoMenuRojo.png")}
  isSelected={selectedIcon === "HOME"}
  onPress={() => handlePress("Home", "HOME", require("../../../assets/icons/IconoHojaRoja.png"))}
/>
<MenuButton
  title="Libreta"
  source={require("../../../assets/icons/IconoMenuMorado.png")}
  isSelected={selectedIcon === "CATEGORIES"}
  onPress={() => handlePress("Categories", "CATEGORIES", require("../../../assets/icons/IconoHojaMorado.png"))}
/>
<MenuButton
  title="Videos T"
  source={require("../../../assets/icons/IconoMenuVerde.png")}
  isSelected={selectedIcon === "SEARCH"}
  onPress={() => handlePress("Search", "SEARCH", require("../../../assets/icons/IconoHojaVerde.png"))}
/>
<MenuButton
  title="Proxi"
  source={require("../../../assets/icons/IconoMenuAzul.png")}
  isSelected={selectedIcon === "PROXI"}
  onPress={() => handlePress("Proxi", "PROXI", require("../../../assets/icons/IconoHojaAzul.png"))}
/>

      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
