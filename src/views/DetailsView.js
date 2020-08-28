import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';


const DetailsView = ({ route, favorite, addProductToFavorite, removeProductFromFavorite }) => {

    const product = route.params.product;

    const _changeFavorite = () => {
        favorite[product.id] ? removeProductFromFavorite(product) : addProductToFavorite(product);
    };

    let ingredientList;
    if (product.ingredients && product.ingredients.length > 0) {
        ingredientList = '';
        product.ingredients.forEach((element, index) => {
            if (index === 0) {
                ingredientList += element.text;
            }
            else {
                ingredientList += ', ' + element.text;
            }
        })
    }
    console.log(product.origins);
    console.log(product.nutriscore_grade);


    return (
        <View style={styles.body}>
            <View style={styles.main}>
                <Image
                    source={product.image_thumb_url ? { uri: product.image_thumb_url } : null}
                    style={styles.productPicture}
                />
                <Text style={styles.productName}>{product.product_name}</Text>
                <Text style={styles.productBrand}>{product.brands}</Text>
                <Text>(Quantité : {product.quantity})</Text>
                <TouchableOpacity style={styles.button} onPress={() => _changeFavorite()}>
                    <Icon name={favorite[product.id] ? "favorite" : "favorite-border"} type="material" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                {
                    product.nutriscore_grade ? (
                        <View>
                            <Text style={styles.subtitle}>Nutrition :</Text>
                            <Text style={styles.uppercase}>{product.nutriscore_grade}</Text>
                        </View>
                    ) : null
                }
                {
                    product.origins ? (
                        <View>
                            <Text style={styles.subtitle}>Origine :</Text>
                            <Text style={styles.uppercase}>{product.origins}</Text>
                        </View>
                    ) : null
                }
                {
                    !ingredientList ? null : (
                        <View>
                            <Text style={styles.subtitle}>Ingrédients : </Text>
                            <Text>{ingredientList}</Text>
                        </View>
                    )
                }
            </View>
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
    },
    button: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 30,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    uppercase: {
        textTransform: 'uppercase',
    }
});

export default DetailsView;