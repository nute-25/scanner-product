import React from 'react';
import {FlatList, Text, View } from 'react-native';

import ListProduct from '../components/ListProduct';


const FavoriteView = ({ navigation, favorite }) => {

    return (
        <View style={{ flex: 1}}>
            {
                Object.keys(favorite).length ? (
                    <FlatList
                        data={Object.values(favorite)}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => <ListProduct item={item} navigation={navigation} />}
                    />
                ) : <Text>Vous n'avez pas de produits favoris.</Text>
            }
        </View>
    );
};

export default FavoriteView;