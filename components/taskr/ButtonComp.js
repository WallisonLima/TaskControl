import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

export const ButtonComp = () => {
    return (
        <TouchableOpacity 
            onPress={() => alert("Você clicou")}
            style={styles.container}>
            <Text style={styles.text}>Clique em mim</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        width: '40%',
        padding: 26,
        borderBottomColor: 'rgba(255,255,255,0.25)',
        borderBottomWidth: 2,
        borderRadius: 12,
        marginBottom: 5,
    }, 
    text:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
})