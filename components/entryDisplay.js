import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-elements/dist/card/Card';
import {EntryCard} from './entryCard';



const EntryDisplay = () => {
    return (
        <View style={styles.centered}>
            <Text>Entry Display </Text>
            <Text>Todays Entries: </Text>
            <Text>Apple and milk 220999 cals P/C/F</Text>
            <Text>Apple and milk 220 cals P/C/F</Text>
            <Text>Apple and milk 220 cals P/C/F</Text>
        </View>
    );
};

export default EntryDisplay;

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center',
    },
});
