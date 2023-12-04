import React from 'react';
import { 
  SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity 
} from 'react-native';
import Constants from 'expo-constants';
const ToolCard = ({ title, description, image, onCardPress }) => (
    <TouchableOpacity onPress={() => onCardPress(title)}>
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

  const HerramientasScreen = (props) => {

    const handleCardPress = (title) => {
      switch(title) {
        case "Poda de flores":
          props.navigation.navigate('PodaFlores');
          break;
        // Agrega más casos según tus pantallas
        default:
          console.log("No navigation set for this card");
      }
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
          <Image source={require('../img/IconoVideos.png')} style={styles.headerIcon} />
          <Text style={styles.headerTitle}>VIDEOS</Text>
          <Text style={styles.headerSubtitle}>TUTORIALES</Text>
        </View>
        <ToolCard
          title="Poda de flores"
          image={require('../img/PodaFlores.png')}
          onCardPress={handleCardPress}
        />
        <ToolCard
          title="Poda de ramas"
          image={require('../img/PodaRamas.png')}
        />
         <ToolCard
          title="Poda de hojas"
          image={require('../img/PodaHojas.png')}
        />
         <ToolCard
          title="Corte de frutas"
          image={require('../img/PodaFrutos.png')}
        />
         <ToolCard
          title="Poda de raíces"
          image={require('../img/PodaRaices.png')}
        />
        
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
    alignItems: 'center',
    marginVertical: 20,
    
  },
  headerIcon: {
    width: 80,
    height: 80,
    top:'40%'
  },
  headerTitle: {
    fontSize: 24, // Ajusta el tamaño de la fuente para que coincida con tu diseño
    fontWeight: '300', // 'normal' para no aplicar negrita
    color: '#3D550C',
        top:'70%'

  },
  headerSubtitle: {
    fontSize: 40, // Ajusta el tamaño de la fuente para que coincida con tu diseño
    fontWeight: '400', // 'bold' para la negrilla
    color: '#3D550C',
    letterSpacing: 0.5, // Ajusta el espaciado de las letras según sea necesario
    // Puedes añadir un margen superior si el título y el subtítulo están muy juntos
    marginTop: 4,
    top:'63%'

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
    marginBottom: '15%', // Ajusta el margen según sea necesario
    // Añade sombras y otros estilos según tus preferencias.
    top:'40%'

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
    top: 70, // Ajusta la distancia desde la parte superior
    left: 10, // Ajusta la distancia desde la izquierda
    padding: 10, // Espacio alrededor del botón para facilitar la interacción
  },
  backButtonImage: {
    width: 50, // Ajusta según el tamaño de tu icono
    height: 50, // Ajusta según el tamaño de tu icono
  },
});

export default HerramientasScreen;
