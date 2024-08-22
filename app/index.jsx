import { useState } from "react";
import { Text, View, SafeAreaView,ScrollView, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { useCart } from "../hooks/useCart";



export default function Index() {
  // const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  //   alert(`${item.name} added to cart!`);
  // };

  const {addToCart} = useCart();

  const foodMenu = [
    { id: '1', name: 'Kota', image: 'https://essentialflavours.co.za/wp-content/uploads/2023/09/gatsby.png', price: 65.00, description: "A hearty South African street food featuring a hollowed-out bread loaf filled with fried chips, sausage, polony, cheese, and various sauces." },
    { id: '2', name: 'Shawarma', image: 'https://theperfecttide.com/wp-content/uploads/2022/06/DSC_5536-1-scaled.jpg', price: 50.00, description: "Middle Eastern spiced meat cooked on a rotisserie, served in pita or flatbread with fresh vegetables and flavorful sauces." },
    { id: '3', name: 'Burger', image: 'https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg', price: 77.00, description: "A classic American sandwich with a grilled beef patty (or other proteins), served in a bun with a variety of toppings like lettuce, tomato, cheese, and condiments." },
    { id: '4', name: 'Pizza', image: 'https://www.allrecipes.com/thmb/D73VvwH_cG06pVzh05oitTocYV8=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg',  price: 91.00, description: "Italian flatbread topped with tomato sauce, cheese, and various ingredients such as pepperoni, vegetables, and olives, baked to perfection." },
    { id: '5', name: 'Burrito', image: 'https://static01.nyt.com/images/2024/01/10/multimedia/AS-Burrito-vzhk/AS-Burrito-vzhk-superJumbo.jpg', price: 63.00, description: "A Mexican wrap with a flour tortilla filled with seasoned meat, rice, beans, cheese, and veggies, customizable with a range of ingredients." },
    { id: '6', name: 'Pasta', image: 'https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg', price: 82.00, description: "Italian noodles served with a variety of sauces like marinara, Alfredo, or pesto, often accompanied by vegetables, meats, or seafood." },
  ];

  const renderItem = ({ item }) => (
    <SafeAreaView style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodDesc}>{item.description}</Text>
      <Text style={styles.foodPrice}>Price: R{(item.price).toFixed(2)}</Text>
      <TouchableOpacity onPress={() => addToCart(item)} style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  return (
    <>
      {/* <SafeAreaView style={styles.screenContainer}> */}
      <ScrollView>
          <Text style={styles.text}>
            Menu
          </Text>

        <FlatList
          data={foodMenu}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </ScrollView>
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
    marginTop:35,
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
    // borderRadius: 5,
    // padding: 10,
    // marginBottom: 15,
    margin:5,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderTopWidth:1,
    borderTopColor: "#ddd",
    flexDirection: "column"
  },

  foodImage: {
    width: "auto",
    height: 140,
    borderRadius: 12,
    marginBottom: 10,
  },

  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  foodDesc: {
    fontSize: 16,
    marginLeft:5,
    margin: 5,
    fontWeight: "500",
  },

  foodPrice: {
    fontSize: 18,
  },

  addToCartButton: {
    marginTop: 5,
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
  },
})