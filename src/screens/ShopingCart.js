import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import { selectNumberOfItems, selectSubtotal } from "../store/cartSlice";

const ShopingCartTotals = () => {
    const Subtotal = useSelector(selectSubtotal);
    return(
    <View style={styles.totalsContainer}>selectSubtotal
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>{Subtotal} $</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>80 $</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderColor: 'grey', borderTopWidth: 1, paddingTop: 6 }}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>{Subtotal + 80} $</Text>
        </View>
    </View>
    )
}

const ShopingCart = () => {
    const cartItems = useSelector(state => state.cart.items)
    return (
        <>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShopingCartTotals}
            />

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    )
}


const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        borderColor: 'grey',
        borderTopWidth: 1,
        paddingTop: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingHorizontal:10
        paddingBottom: 6
    },
    text: {
        fontSize: 16,
        color: 'grey'
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
    },
    button: {
        backgroundColor: 'black',
        position: 'absolute',
        // bottom: 0,
        top:'120%',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 100,
        padding: 17,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500'
    }
});

export default ShopingCart;