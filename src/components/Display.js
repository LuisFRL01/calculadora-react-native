import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default (props) => {
    return (
        <View style={estilo.Display}>
            <Text style={estilo.DisplayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    Display: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "rgba(0,0,0,0.6)"
    },
    DisplayValue: {
        fontSize: 50,
        color: "#fff"
    }
});