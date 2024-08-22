import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { router} from "expo-router"

export default function Checkout({ onNext }) {

  const handleNavigation = () => {
    router.push("./Form2") //go to second part of form
  };

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    // validate user input
    if (!userName || !userEmail || !phoneNumber) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail)) {
      Alert.alert('Error', 'Invalid email address.');
      return;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      Alert.alert('Error', 'Phone number must be 10 digits.');
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
          <Feather name="user" size={24} color="black" />
          Name: </Text>
        <TextInput style={styles.inputField} value={userName} onChangeText={setUserName}/>
      
        <Text style={styles.text2}>
          <Feather name="mail" size={24} color="black" />
          Email: </Text>
        <TextInput style={styles.inputField} value={userEmail} onChangeText={setUserEmail} keyboardType="email-address"/>
      
        <Text style={styles.text2}>
        <Feather name="phone" size={24} color="black" />
          Phone Number: </Text>
        <TextInput style={styles.inputField} value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad"/>
      
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
    fontSize: 20,
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