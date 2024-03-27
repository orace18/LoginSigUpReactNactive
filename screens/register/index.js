import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { register } from '../../api/authclient'; // Assurez-vous d'avoir votre fonction d'inscription ici

import { useNavigation } from '@react-navigation/native'; // Importer la méthode de navigation

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState(''); // Now a string for manual input
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation(); // Initialiser la méthode de navigation

  const handleRegister = () => {
    if (!email || !birthday || !address || !gender || !lastname || !firstname || !phonenumber || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    const idRoles='1';
    const place = {
      "place": address
    };

    const addressP = JSON.stringify(place);
    const phone = countryCode + phonenumber;
    register(email, password, phone, birthday, addressP, gender, lastname, firstname, idRoles);

    // Naviguer vers la page Home après l'inscription
    navigation.navigate('Home');

    console.log('Email:', email);
    console.log('Birthday:', birthday); // Now logs the entered date string
    console.log('Address:', address);
    console.log('Gender:', gender);
    console.log('Lastname:', lastname);
    console.log('Firstname:', firstname);
    console.log('Phonenumber:', phonenumber);
    console.log('Password:', password);
    console.log('Country Code:', countryCode);
  };

  return (
    <View style={styles.container}>
     
      {/* Removed the unnecessary TouchableOpacity for date selection */}
      <Text style={styles.title}>S'inscrire</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={firstname}
        onChangeText={setFirstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Nom de famille"
        value={lastname}
        onChangeText={setLastname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
       <Text style={styles.input}>Date de naissance:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD" // Format guide for user input
        value={birthday}
        onChangeText={setBirthday}
        keyboardType="number-pad" // Suggest numeric keyboard for date input
      />
       <TextInput
        style={styles.input}
        placeholder="Adresse"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={gender}
        onChangeText={setGender}
      />
      <View style={styles.phoneInputContainer}>
        <CountryPicker
          withFlag
          withCallingCode
          withFilter
          withCallingCodeButton
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
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
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
    backgroundColor: '#FFFFFF',
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

export default SignUp;