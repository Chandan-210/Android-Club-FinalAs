import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    const pressHandler = () => {
        submitHandler(text);
        setText('');
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='write your todo list here'
                onChangeText={changeHandler}
                value={text}
            />
            <Button color='salmon' onPress={pressHandler} title='add new item to the list' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
