import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Task = ({ description }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => alert('Você clicou em ' + description)}>
                <Text style={styles.text}>{description}</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '80%',
        padding: 26,
        borderBottomColor: 'rgba(255,255,255,0.25)',
        borderBottomWidth: 2,
        borderRadius: 12,
        marginBottom: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
})