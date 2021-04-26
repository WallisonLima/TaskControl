import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default Task = ({ description, complete, onToggleComplete }) => {
    const [isDirty, setIsDirty] = useState(false)
    const handleToggleComplete = () =>{
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
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        padding: 26,
        borderBottomColor: 'rgba(255, 255, 255, 0.25)',
        borderBottomWidth: 2,
    },
    text: {
        color: 'white'
    },
    completed: {
        textDecorationLine: 'line-through',
        textDecorationColor: 'white',
        textDecorationStyle: 'double'
    },
    dirty: {
        backgroundColor: 'pink'
    }
})