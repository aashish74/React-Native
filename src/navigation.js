import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './screens/ProductScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShopingCart from './screens/ShopingCart';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';


const Stack = createNativeStackNavigator();

const Navigation = () => {

    const numberOfItems = useSelector(selectNumberOfItems);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ProductScreen} 
                options={({navigation}) => ({
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style = {{flexDirection:'row'}}>
                            <Text style = {{fontSize:18, fontWeight:'600'}}>X</Text>
                            <Text style = {{marginLeft:5, fontWeight:'500', fontSize:17, }}>{numberOfItems}</Text>
                        </TouchableOpacity>
                    ),
                })} 
                />
                <Stack.Screen name="Product Details" component={ProductDetailsScreen} options={{ presentation: 'card' }} />
                <Stack.Screen name="Cart" component={ShopingCart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

export default Navigation;