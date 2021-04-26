import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'

export const ButtonRestau = ({onToggleRestau}) => {
    const restau = () => {
        onToggleRestau()
    }
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={restau}
        >
           <Text style={styles.text}>Restaurar Tasks</Text>
        </TouchableOpacity >
    )
}

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
    },
})