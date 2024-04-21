import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aora</Text>
            <StatusBar style='auto' />
            <Link href="/profile" style={styles.link}>Go to Profile</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        color: 'green',
    },
    link: {
        color: 'blue',
    },
});
