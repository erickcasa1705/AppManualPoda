import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';

const ToolCard = ({ title, description, image, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.toolCardContainer}>
      <View style={styles.imageCircle}>
        <Image source={image} style={styles.toolCardImage} />
      </View>
      <View style={styles.toolCardContent}>
        <Text style={styles.toolCardTitle}>{title}</Text>
        <Text style={styles.toolCardDescription}>{description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const VideosTScreen = (props) => {

  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
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
          <Image source={require('../img/IconoHerramientas.png')} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>HERRAMIENTAS</Text>
          <Text style={styles.headerSubtitle}>Encuentra opciones para las</Text>
        <Text style={styles.headerSubtitle2}> herramientas necesarias</Text>
        </View>
        <ToolCard
          title="Tijeras de una mano"
          image={require('../img/TijerasMano.png')}
          onPress={() => openURL('https://www.amazon.com/-/es/Paquete-inoxidable-jardiner%C3%ADa-corta%C3%BA%C3%B1as-herramientas/dp/B0C9L86GGH/ref=sr_1_4?adgrpid=81917887899&hvadid=585412555189&hvdev=c&hvlocphy=9069516&hvnetw=g&hvqmt=b&hvrand=6043852612274208757&hvtargid=kwd-297520023544&hydadcr=21170_13331852&keywords=tijeras+jardineria&qid=1701326610&sr=8-4')}

        />
        <ToolCard
          title="Cizalla"
          image={require('../img/Cizalla.png')}
        />
         <ToolCard
          title="Cortasetos"
          image={require('../img/Cortasetos.png')}
        />
         <ToolCard
          title="Desmalezadora"
          image={require('../img/Desmalezadora.png')}
        />
         <ToolCard
          title="Pala puntona bellota"
          image={require('../img/Pala.png')}
        />
        <ToolCard
          title="Sierra de poda"
          image={require('../img/Sierra.png')}
        />
                <View style={{ height: 100 }} /> 

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
    paddingBottom: 100,// Ajusta este valor según sea necesario para proporcionar espacio adicional al final
  },
  headerContainer: {
    alignItems: 'center', // Centra los elementos en el contenedor
    justifyContent: 'center', 
    marginVertical: 20,
    top:'6%'
  },
  headerIcon: {
    width: 97,
    height: 80,
  },
  headerTitle: {
    top:'15%',
    fontSize: 37,
    fontWeight: '400',
    color: '#60249c',
  },
 headerSubtitle: {
    fontSize: 16,
    fontWeight: '400', // Puedes ajustar esto para que sea más delgado si es necesario
    letterSpacing: 0.5, // Ajusta el espaciado de las letras según sea necesario
    // Puedes añadir un margen superior si el título y el subtítulo están muy juntos
    marginTop: 4,
    top:'15%'
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
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderTopRightRadius: 50, // Redondeo superior derecho
    borderBottomRightRadius: 50, // Redondeo inferior derecho
    borderTopLeftRadius: 0, // Sin redondeo superior izquierdo
    borderBottomLeftRadius: 0, // Sin redondeo inferior izquierdo
    padding: 10,
    marginRight:'10%',
    marginBottom: '10%', // Ajusta el margen según sea necesario
    top:'33%'
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
    top: 10, // Ajusta la distancia desde la parte superior
    left: 10, // Ajusta la distancia desde la izquierda
    padding: 10, // Espacio alrededor del botón para facilitar la interacción
  },
  backButtonImage: {
    width: 50, // Ajusta según el tamaño de tu icono
    height: 50, // Ajusta según el tamaño de tu icono
  },
});

export default VideosTScreen;
