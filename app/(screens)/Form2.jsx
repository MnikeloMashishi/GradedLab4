import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { router} from "expo-router"

export default function Form2({ onNext, prevData }) {

  const handleNavigation = () => {
    router.push("./Form3")
  };

  const [userAddress, setUserAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleNext = () => {
    // validate user input
    if (!userAddress || !city || !state || !zip) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!/^\d{5}$/.test(zip)) {
      Alert.alert('Error', 'Zip code must be 5 digits.');
      return;
    }
    if (onNext){
      onNext({ userName, userEmail, phoneNumber })
    }
    handleNavigation();
  }

  return (
    <View>
      <Text style={styles.text}>Checkout</Text>

      {/* input fields for user input */}
      <View>
        <Text style={styles.text2}>
            <Feather name="home" size={24} color="black" />
            Address: </Text>
        <TextInput style={styles.inputField} value={userAddress} onChangeText={setUserAddress}/>
      
        <Text style={styles.text2}>
            <Feather name="map-pin" size={24} color="black" />
            City: </Text>
        <TextInput style={styles.inputField} value={city} onChangeText={setCity} />
      
        <Text style={styles.text2}>
            <Feather name="globe" size={24} color="black" />
            State: </Text>
        <TextInput style={styles.inputField} value={state} onChangeText={setState} />

        <Text style={styles.text2}>
            <Feather name="tag" size={24} color="black" />
            ZIP Code: </Text>
        <TextInput style={styles.inputField} value={zip} onChangeText={setZip} keyboardType="phone-pad"/>
      
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 35,
    backgroundColor: "purple",
    width: '100%',
    textAlign: "center",
    padding: 17,
    borderRadius: 8,
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },

  text2: {
    fontSize: 18,
    paddingLeft: 8,
    marginVertical: 8,
  },

  inputField: {
    margin: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },

  nextButton: {
    margin: 4,
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})