import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

export default function Form3({ prevData, onSubmit }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {
    // validate user input
    if (!/^\d{16}$/.test(cardNumber)) {
      Alert.alert('Error', 'Credit card number must be 16 digits.');
      return;
      }
    if (!/^\d{2}\/\d{2}$/.test(expDate)) {
      Alert.alert('Error', 'Expiration date must be in MM/YY format.');
      return;
    }
    if (!/^\d{3}$/.test(cvv)) {
      Alert.alert('Error', 'CVV must be 3 digits.');
      return;
    }
    Alert.prompt('Complete','Payment Processed')
  }

  return (
    <View>
      <Text style={styles.text}>Checkout</Text>

      {/* input fields for user input */}
      <View>
        <Text style={styles.text2}>
            <Feather name="credit-card" size={24} color="black" />
            Card Number: </Text>
        <TextInput style={styles.inputField} value={cardNumber} onChangeText={setCardNumber} keyboardType="numeric"/>
      
        <Text style={styles.text2}>
            <Feather name="credit-card" size={24} color="black" />
            Expiry Date: </Text>
        <TextInput style={styles.inputField} value={expDate} onChangeText={setExpDate} keyboardType="numeric"/>
      
        <Text style={styles.text2}>
            <Feather name="credit-card" size={24} color="black" />
            CVV: </Text>
        <TextInput style={styles.inputField} value={cvv} onChangeText={setCvv} keyboardType="numeric"/>
      
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.buttonText}>
            Submit
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

  submitButton: {
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