import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react';

const AsyncStorageManager = ({ history, setHistory, favorite, setFavorite }) => {

    useEffect(() => {
        AsyncStorage.getItem('history')
            .then(storedHistory => {
                if (storedHistory) {
                    // update redux data
                    setHistory(JSON.parse(storedHistory));
                }
            })
            .catch(error => console.error(error));
        AsyncStorage.getItem('favorite')
            .then(storedFavorite => {
                if (storedFavorite) {
                    // update redux data
                    setFavorite(JSON.parse(storedFavorite));
                }
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        // update history storage
        AsyncStorage.setItem('history', JSON.stringify(history))
            .then()
            .catch(error => console.error(error));
    }, [history]);

    useEffect(() => {
        // update favorite storage
        AsyncStorage.setItem('favorite', JSON.stringify(favorite))
            .then()
            .catch(error => console.error(error));
    }, [favorite]);


    return null;

};

export default AsyncStorageManager;
