
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking // Importa Linking
} from 'react-native';
import Constants from 'expo-constants';


const ToolCard = ({ title, description, image }) => (
    <View style={styles.toolCardContainer}>
    <View style={styles.imageCircle}>
      <Image source={image} style={styles.toolCardImage} />
    </View>
    <View style={styles.toolCardContent}>
      <Text style={styles.toolCardTitle}>{title}</Text>
      <Text style={styles.toolCardDescription}>{description}</Text>
    </View>
  </View>
);

const PodaFloresScreen = (props) => {
    // Función para abrir un enlace
    const openLink = (url) => {
      Linking.canOpenURL(url).then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      });
    };

  return (
    <SafeAreaView style={[styles.container, { marginTop: Constants.statusBarHeight }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
        <TouchableOpacity
            onPress={() => props.navigation.goBack()} // Cambiado a goBack() para regresar a la pantalla anterior
            style={styles.backButton}
          >
            <Image
              source={require('../img/regreso.png')} // Asegúrate de que la ruta al archivo de imagen es correcta
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
          <Image source={require('../img/IconoPodaFlores.png')} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>PODA DE</Text>
          <Text style={styles.headerSubtitle}>FLORES</Text>
        </View>
        <TouchableOpacity style={styles.cardContainer} onPress={() => openLink('https://www.youtube.com/watch?v=M616bao9eZ0')}>
          <Image source={require('../img/Video1Flores.png')} style={styles.cardImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer} onPress={() => openLink('https://www.youtube.com/watch?v=th2h9yQysB4')}>
          <Image source={require('../img/Video2Flores.png')} style={styles.cardImage} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    scrollView: {
      marginHorizontal: 2,
    },
    headerContainer: {
      alignItems: 'center', // Centra los elementos en el contenedor
      justifyContent: 'center', 
      marginVertical: 20,
      top:0
    },
    headerIcon: {
      width: 140,
      height: 200,
      top:-20
    },
    headerTitle: {
        fontSize: 20, // Ajusta el tamaño de la fuente para que coincida con tu diseño
        fontWeight: '300', // 'normal' para no aplicar negrita
        color: '#b20000',
            top:'0%'
    
      },
      headerSubtitle: {
        fontSize: 37, // Ajusta el tamaño de la fuente para que coincida con tu diseño
        fontWeight: '400', // 'bold' para la negrilla
        color: '#b20000',
        letterSpacing: 0.5, // Ajusta el espaciado de las letras según sea necesario
        // Puedes añadir un margen superior si el título y el subtítulo están muy juntos
        marginTop: 4,
        top:'-5%'
    
      },
    headerSubtitle2: {
      fontSize: 16,
      fontWeight: '400', // Puedes ajustar esto para que sea más delgado si es necesario
      letterSpacing: 0.5, // Ajusta el espaciado de las letras según sea necesario
      // Puedes añadir un margen superior si el título y el subtítulo están muy juntos
      marginTop: 4,
      top:'15%'
    },
    toolCardContainer: {
      flexDirection: 'row',
      marginVertical: 10,
    alignSelf: 'center',

      backgroundColor: '#F0F0F0',
      borderTopRightRadius: 50, // Redondeo superior derecho
      borderBottomRightRadius: 50, // Redondeo inferior derecho
      borderTopLeftRadius: 0, // Sin redondeo superior izquierdo
      borderBottomLeftRadius: 0, // Sin redondeo inferior izquierdo
      padding: 10,
      marginRight:'10%',
      marginBottom: '15%', // Ajusta el margen según sea necesario
      // Añade sombras y otros estilos según tus preferencias.
    },
    imageCircle: {
      backgroundColor: '#FFFFFF', // Fondo blanco para el círculo
      borderRadius: 40, // La mitad del ancho y alto para hacerlo circular
      width: 70, // Ancho del círculo
      height: 80, // Alto del círculo
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
    },
    toolCardImage: {
      width: 60, // Ancho de la imagen
      height: 60, // Alto de la imagen
      resizeMode: 'contain',
    },
    cardContainer: {
        backgroundColor: '#fff', // Fondo blanco para la tarjeta
        borderRadius: 50, // Bordes redondeados
        overflow: 'hidden', // Oculta cualquier contenido que se salga de los bordes redondeados
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Posición de la sombra
        shadowOpacity: 0.1, // Opacidad de la sombra
        shadowRadius: 4, // Desenfoque de la sombra
        elevation: 3, // Elevación para Android para efecto de sombra
        marginVertical: 8, // Margen vertical para separar las tarjetas
        marginHorizontal: 16, // Margen horizontal para dar espacio a los lados
        // Puede requerir ajustar estos valores según tu diseño específico
      },
      cardImage: {
        width: '100%', // La imagen debería extenderse por todo el ancho de la tarjeta
        height: undefined, // Altura indefinida para mantener la relación de aspecto
        aspectRatio: 1.5, // La relación de aspecto depende de tus imágenes
        // Ajusta esta proporción según el contenido de tu imagen
      },
      
    toolCardContent: {
      flex: 1,
    },
    toolCardTitle: {
      fontSize: 18,
      top:10,
      marginLeft:10,
      fontWeight: '400', // Puedes ajustar esto para que sea más delgado si es necesario
  
    },
    toolCardDescription: {
      fontSize: 14,
      color: '#555',
    },
    backButton: {
      position: 'absolute', // Posicionamiento absoluto para colocarlo en la esquina superior izquierda
      top: 70, // Ajusta la distancia desde la parte superior
      left: 10, // Ajusta la distancia desde la izquierda
      padding: 10, // Espacio alrededor del botón para facilitar la interacción
    },
    backButtonImage: {
      width: 50, // Ajusta según el tamaño de tu icono
      height: 50, // Ajusta según el tamaño de tu icono
    },
  });

  
  export default PodaFloresScreen;