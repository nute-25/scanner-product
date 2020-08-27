import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import ListProduct from '../components/ListProduct';

const HistoryView = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fr-en.openfoodfacts.org/category/pizzas/1.json')
            .then((response) => response.json())
            .then((json) => setData(json.products))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={{ flex: 1}}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => <ListProduct item={item} navigation={navigation} />}
                />
            )}
        </View>
    );
};

export default HistoryView;