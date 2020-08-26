import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListProduct = ({ item, navigation }) => {

    const _onPress = (item) => {
        navigation.navigate('Details', { product: item })
    }

    return (
        <View style={styles.lineContainer}>
            <TouchableOpacity onPress={() => _onPress(item)}>
                <Text style={styles.text}>{item.product_name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    lineContainer: {
        height: 50,
        padding: 15,
        borderBottomColor: '#fff',
        borderBottomWidth: 3,
    },
    text: {
        fontSize: 15,
    }
});

export default ListProduct;