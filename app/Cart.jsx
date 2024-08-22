import { Text, View, StyleSheet, ScrollView, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handlePress = () => {
    alert('Order Complete', 'Thank you for your order!');
    clearCart();
  };
  // const cartItems = [
  //   { id: '1', name: 'Kota', quantity: 3, price: 40 },
  //   { id: '2', name: 'SchoolBoy', quantity: 2, price: 40 },
  //   { id: '3', name: 'Fish', quantity: 4, price: 40 },
  // ];

  // const renderItem = ({ item }) => (
  //   <View style={styles.itemContainer}>
  //     <Text style={styles.itemName}>{item.name}</Text>
  //     <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
  //     <Text style={styles.itemPrice}>Price: R{item.price.toFixed(2)}</Text>
  //   </View>
  // );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
      <Text style={styles.itemPrice}>Price: R{(item.price * item.quantity).toFixed(2)}</Text>
      <TouchableOpacity  style={styles.removeItemButton} onPress={() => removeFromCart(item.id)}>
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <ScrollView>
        <View>
          <Text style={styles.text}>
            Shopping Cart
          </Text>
        </View>
        
        {/* <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* <TouchableOpacity>
        <Text style={styles.text2}>Summary goes here</Text>
      </TouchableOpacity> */}

      <Text style={styles.text2}>Total: R{calculateTotal()}</Text>
      

      <TouchableOpacity style={styles.completeOrderButton} onPress={handlePress}>
        <Text style={styles.buttonText}>
          Complete Order
        </Text>
      </TouchableOpacity>

      
      </ScrollView>
    </>
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

  text2:{
    fontSize: 15,
    padding: 15,
    fontWeight: "bold"
  },

  completeOrderButton: {
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

  removeItemButton:{
    width: "22%",
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "purple",
    padding: 10,
  },


  itemContainer: {
    margin:5,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderTopWidth:1,
    borderTopColor: "#ddd",
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#555',
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
})