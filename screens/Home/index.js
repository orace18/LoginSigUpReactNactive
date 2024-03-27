import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur la page d'accueil !</Text>
      <Text style={styles.description}>C'est ici que vous pouvez commencer à explorer notre application.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Vous pouvez changer la couleur de fond selon votre préférence
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Home;
