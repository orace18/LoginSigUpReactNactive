import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Après 3 secondes, naviguer vers l'écran suivant
      navigation.navigate('SignIn'); // Remplacez 'HomeScreen' par le nom de votre écran d'accueil
    }, 3000);

    // Nettoyer le timer lorsque le composant se démonte
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.jpg')} // Chemin vers le fichier image logo.jpg dans le dossier assets
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Couleur d'arrière-plan de l'écran de SplashScreen
  },
  logo: {
    width: 150, // Largeur de votre logo
    height: 150, // Hauteur de votre logo
    resizeMode: 'contain', // Mode de redimensionnement de l'image
  },
});

export default SplashScreen;
