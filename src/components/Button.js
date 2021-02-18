import React from 'react';
import { TouchableHighlight, Text, StyleSheet, Dimensions } from 'react-native';

export default (props) => {
    const estilos = [style.button];
    
    if(props.double) estilos.push(style.buttonDouble);
    if(props.triple) estilos.push(style.buttonTriple);
    if(props.operation) estilos.push(style.operationButton);

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={estilos}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    button: {
        fontSize: 40,
        textAlign: "center",
        padding: 20,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        backgroundColor: "#f0f0f0",
        borderColor: "#888",
        borderWidth: 1
    },
    operationButton: {
        color: "#fff",
        backgroundColor: "#fa8231"
    },
    buttonDouble: {
        width: (Dimensions.get("window").width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3,
    }
});