import { FlatList, StyleSheet, Image, View, Pressable } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productsSlice } from '../store/productSlice';

export default function ProductScreen({navigation}) {
    const products = useSelector(state => state.products.products);
    const dispach = useDispatch();
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Pressable onPress={()=> {
                    dispach(productsSlice.actions.setSelectedProduct(item.id));
                    navigation.navigate('Product Details')}} style={styles.itemContainer}>
                    <Image style={{ aspectRatio: 1, width: '100%' }}
                        source={{ uri: item.image }} />
                </Pressable>
            )}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 1
    }
})