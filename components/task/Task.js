import React, { useState } from 'react';
import { render } from 'react-dom';
import {Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Task = ({ description, complete, onToggleComplete}) => {
    const [isDirty, setIsDirty] = useState(false)

    const handleToggleComplete = () => {
        setIsDirty(true);
        onToggleComplete();
    }

    return (
        <Pressable
            style={[styles.container, isDirty && styles.dirty]}
            onPress={handleToggleComplete}
        >
            <Text style={[styles.text, complete && styles.completed]}>
                {description}
            </Text>
        </Pressable>
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
    },
    completed: {
        textDecorationLine: 'line-through',
        textDecorationColor: 'white',
        textDecorationStyle: 'double'
    },
    dirty: {
        backgroundColor: 'gray'
    }
})