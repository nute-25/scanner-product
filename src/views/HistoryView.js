import React from 'react';
import {FlatList, Text, View } from 'react-native';

import ListProduct from '../components/ListProduct';


const HistoryView = ({ navigation, history }) => {

    return (
        <View style={{ flex: 1}}>
            {
                Object.keys(history).length ? (
                    <FlatList
                        data={Object.values(history)}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => <ListProduct item={item} navigation={navigation} />}
                    />
                ) : <Text>Vous n'avez encore rien scanné.</Text>
            }
        </View>
    );
};

export default HistoryView;