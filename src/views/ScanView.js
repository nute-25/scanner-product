import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';

const ScanView = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isFlashOn, setFlashMode] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const isFocused = useIsFocused();


    useEffect(() => {
        Camera.requestPermissionsAsync().then(({ status }) => {
            setHasPermission(status === 'granted');
        });
    }, []);

    const _handleBarCodeScanned = ({ data }) => {
        fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.product) {
                    Vibration.vibrate();
                    setScanned(true);
                    navigation.navigate('Details', { product: responseJson.product });
                }
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
                setScanned(false);
            });
    };

    const _changeFlash = () => {
        isFlashOn ?
            setFlashMode(false) :
            setFlashMode(true)
    };

    if (hasPermission === null) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        );
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    if (isFocused) {
        return (
            <View style={{ flex: 1 }}>
                <Camera
                    style={styles.camera}
                    type={Camera.Constants.Type.back}
                    onBarCodeScanned={scanned ? undefined : _handleBarCodeScanned}
                    flashMode={isFlashOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
                >
                    <View style={styles.focus}/>
                    {/* <Button title={'Flash'} onPress={() => _changeFlash()} /> */}
                    <TouchableOpacity style={styles.button} onPress={() => _changeFlash()}>
                        <Icon name="flashlight" type="entypo" />
                    </TouchableOpacity>
                </Camera>
            </View>
        );
    }
    else {
        return <View />
    }
};

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position:'relative',
    },
    focus: {
        width: 250,
        height: 200,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        position: 'absolute',
        top: '35%',
        left: '15%',
    },
    button: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 30,
    }
});


export default ScanView;