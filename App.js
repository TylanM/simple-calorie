import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './components/home';

function meme() {
    alert('hi');
}

const App = () => {
    return (
        <View style={styles.container}>
            <Home />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
