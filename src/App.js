import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from './components/Button';
import Display from './components/Display';

const initialState = {
    current: 0,
    values: [0, 0],
    clearDisplay: false,
    operation: null,
    displayValue: "0"
}

export default function App() {

    const [state, setState] = useState(initialState);

    const addDigit = (num) => {

        const clearDisplay = state.displayValue === "0" || state.clearDisplay;

        if (num === "." && !clearDisplay && state.displayValue.includes(".")) {
            return;
        }

        const currentValue = clearDisplay ? "" : state.displayValue;
        const displayValue = currentValue + num;
        let actualState = { ...state, displayValue, clearDisplay: false }
        setState(actualState);

        if (num !== ".") {
            const newValue = parseFloat(displayValue);
            const values = state.values;
            values[state.current] = newValue;
            actualState = { ...actualState, values };
            setState(actualState);
        }
    }

    const setOperation = (operation) => {
        let actualState = {...state};

        if(state.current === 0){
            actualState = {...actualState, operation, current: 1, clearDisplay: true}
            setState(actualState);
        } else {
            const equals = operation === "=";
            const values = state.values;

            try{
                values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`);
            } catch(e){
                values[0] = state.values[0];
            }

            values[1] = 0;
            actualState = {...actualState, displayValue: `${values[0]}`, operation: equals ? null : operation,
                current: equals ? 0 : 1, clearDisplay: true, values};

            setState(actualState);
        }
    }

    const clearMemory = () => {
        setState(initialState);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Display value={state.displayValue} />
            <View style={styles.buttons}>
                <Button label="AC" triple onClick={clearMemory} />
                <Button label="/" operation onClick={setOperation} />
                <Button label="7" onClick={addDigit} />
                <Button label="8" onClick={addDigit} />
                <Button label="9" onClick={addDigit} />
                <Button label="*" operation onClick={setOperation} />
                <Button label="4" onClick={addDigit} />
                <Button label="5" onClick={addDigit} />
                <Button label="6" onClick={addDigit} />
                <Button label="-" operation onClick={setOperation} />
                <Button label="1" onClick={addDigit} />
                <Button label="2" onClick={addDigit} />
                <Button label="3" onClick={addDigit} />
                <Button label="+" operation onClick={setOperation} />
                <Button label="0" double onClick={addDigit} />
                <Button label="." onClick={addDigit} />
                <Button label="=" operation onClick={setOperation} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
});