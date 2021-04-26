import React, {useState} from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';

export const ButtonTask = ({ description }) => {
    const [isTextButton, setIsTextButton] = useState(description)
    const clickTextButton = (desc) =>{
        setIsTextButton(desc)
    }
    return (
        <TouchableOpacity 
            onPress={() => clickTextButton("Você clicou")}
            style={styles.container}>
            <Text style={styles.text}>{isTextButton}</Text>
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