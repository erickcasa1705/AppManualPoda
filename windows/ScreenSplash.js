import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const ScreenSplash = () => {
  const videoRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Reproduce el video automáticamente al cargar la pantalla
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, []);

  const handleVideoEnd = () => {
    navigation.navigate('Menu'); // Navega a la pantalla del menú cuando el video termina
  };

  return (
    <View style={[styles.container, { marginTop: Constants.statusBarHeight }]}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={require('../img/VideoSplashFinal.mp4')} // Reemplaza con la ruta local de tu video
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping={false}
        onPlaybackStatusUpdate={(status) => status.didJustFinish && handleVideoEnd()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default ScreenSplash;
