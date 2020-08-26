import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const DetailsView = ({ route }) => {
    return (
        <View style={styles.body}>
            <View style={styles.main}>
                <Image
                    source={{ uri: route.params.product.image_small_url }}
                    style={styles.productPicture}
                />
                <Text style={styles.productName}>{route.params.product.product_name}</Text>
                <Text style={styles.productBrand}>{route.params.product.brands}</Text>
                <Text>(Quantité : {route.params.product.quantity})</Text>
            </View>
            <View style={styles.container} />
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    productPicture: {
        alignSelf: 'center', width: 250, height: 200, borderRadius: 3
    },
    productName: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
    },
    productBrand: {
        fontSize: 15,
    }
});

export default DetailsView;