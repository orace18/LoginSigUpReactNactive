import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { login } from '../../api/authclient';

const SignIn = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [phonenumber, setPhonenumber] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if ( !password || !phonenumber) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    const phone = countryCode+phonenumber;
    login(phone,password)


     // Naviguer vers la page Home après la connexion
     navigation.navigate('Home');

    console.log('Password:', password);
    console.log('Country Code:', countryCode);
    console.log('Phone Number:', phonenumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Se connecter</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.phoneInputContainer}>
        <CountryPicker
          withFlag
          withFilter
          withCallingCodeButton
          withCallingCode
          withAlphaFilter
          withEmoji
          onSelect={(country) => setCountryCode(country.cca2)}
          countryCode={countryCode}
          containerButtonStyle={styles.countryPickerButton}
          style={{ paddingTop: 10, paddingBottom: 10 }}
        />
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Numéro de téléphone"
          value={phonenumber}
          onChangeText={setPhonenumber}
          keyboardType="phone-pad" // Suggest numeric keyboard for phone number
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true} // Hide password characters
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.registerText}>Pas de compte? Inscrivez-vous ici</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007BFF',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  registerText: {
    marginTop: 10,
    color: '#007BFF',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  countryPickerButton: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  phoneNumberInput: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
});

export default SignIn;