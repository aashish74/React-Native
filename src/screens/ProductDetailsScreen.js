import { Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native"
import { useSelector, useDispatch} from "react-redux";
import { cartSlice } from "../store/cartSlice";


const ProductDetailsScreen = () => {
    const product = useSelector((state) => state.products.selectedProduct);
    const dispach = useDispatch();

    const addToCart = () =>{
        dispach(cartSlice.actions.addCartItem({product}))
    }

    const { width } = useWindowDimensions(); // This will tell the width of screen so we can make it useful for every screen we cannot use 100% here because it won't work with horizontal scroll in flatlist
    
    return (
        <View>
            <ScrollView>
            <FlatList
                horizontal
                data={product.images}
                renderItem={({ item }) => (
                    <Image style={{ width: width, aspectRatio: 1 }}
                        source={{ uri: item }}
                    />
                )}
                pagingEnabled
            />

            <View style = {{paddingHorizontal:15}}>
                <Text style={styles.title}>{product.name}</Text>

                <Text style={styles.price}>${product.price}</Text>

                <Text style={styles.description}>{product.description}</Text>
            </View>
            </ScrollView>

            <Pressable onPress={addToCart} style = {styles.button}>
                <Text style = {styles.buttonText}>Add To Cart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize:34,
        fontWeight:'500',
        marginVertical:10
    },
    price: {
        fontSize:20,
        fontWeight:'600',
        letterSpacing:1.5
    },
    description: {
        fontSize:18,
        lineHeight:30,
        marginVertical:10,
        fontWeight:'300'   
    },
    button:{
        backgroundColor:'black',
        position:'absolute',
        bottom:10,
        width:'90%',
        alignSelf:'center',
        borderRadius:100,
        padding:17,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
        fontSize:17,
        fontWeight:'500'
    }
});

export default ProductDetailsScreen