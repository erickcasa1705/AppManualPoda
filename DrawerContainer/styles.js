import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  content: {
    flex: 1,
    position: 'relative', // Agregado para el posicionamiento de la imagen
    marginTop: '80%',
    paddingBottom: '36%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '50%',
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
  },
  topRightImage: {
    position: 'absolute',
    top: 10,  // Ajusta según lo necesites
    right: 10, // Ajusta según lo necesites
    width: 50, // Ajusta el tamaño según lo necesites
    height: 50, // Ajusta el tamaño según lo necesites
    resizeMode: 'contain',  // Esto asegura que la imagen se ajuste dentro del tamaño especificado sin estirarse
    zIndex: 9999 // Asegúrate de que la imagen siempre esté en primer plano
}
});


export default styles;
