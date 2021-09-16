import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeProvider, Button} from 'react-native-elements';
import Backend from '../database/Backend';

const theme = {
    Button: {
        buttonStyle: {
            backgroundColor: 'pink',
        },

        titleStyle: {
            color: 'red',
        },
    },
};

function handleClick(e) {
    e.preventDefault();
    Backend.meme();
}

const TestButton = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button onPress={handleClick} title="Click for popup" />
        </ThemeProvider>
    );
};

export default TestButton;
