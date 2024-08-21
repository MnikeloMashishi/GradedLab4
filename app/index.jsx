import { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";



export default function Index() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  const foodMenu = [
    { id: '1', name: 'Kota', image: 'https://via.placeholder.com/150', price: 'R40.00' },
    { id: '2', name: 'SchoolBoy', image: 'https://via.placeholder.com/150', price: 'R40.00' },
    { id: '3', name: 'Pap', image: 'https://via.placeholder.com/150', price: 'R40.00' },
    { id: '4', name: 'Pizza', image: 'https://via.placeholder.com/150',  price: 'R40.00' },
    { id: '5', name: 'Magwinya', image: 'https://via.placeholder.com/150', price: 'R40.00' },
    { id: '6', name: 'Fish', image: 'https://via.placeholder.com/150', price: 'R40.00' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodPrice}>{item.price}</Text>
      <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
          <Text style={styles.text}>
            Menu
          </Text>

        <FlatList
        data={foodMenu}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // contentContainerStyle={styles.container}
        contentContainerStyle={styles.flatListContent}
      />
      </SafeAreaView>
    </>
    
  );
}

const styles = StyleSheet.create({
  screenContainer:{
    flex: 1,
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    backgroundColor: "purple",
    width: '100%',
    textAlign: "center",
    padding: 17,
    borderRadius: 8,
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  },

  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },

  foodImage: {
    width: '50%',
    height: 50,
    borderRadius: 8,
  },

  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  foodPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  addToCartButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingBottom: 20, // Adds padding at the bottom of the FlatList
  },
})