import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>19BCE1004 - KEEP NOTES</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'orchid',
    },
    title: {
        textAlign: 'center',
        color: '#FFD700',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
