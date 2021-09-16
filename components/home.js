import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import DateBar from './dateBar';
import {EntryCard} from './entryCard';
import EntryDisplay from './entryDisplay';
import FooterBar from './footerBar';
import Test2, { InputField } from './test2';
import {StatsCard} from './statsCard';
import StatsDisplay from './statsDisplay';
import Test from './test';
import TestButton from './testButton';

const Home = () => {
    return (
        <View style={styles.container}>
            <DateBar />
            <StatsCard />
            <EntryCard />
            <Test2 />
            <Test />
            <TestButton />
            <FooterBar />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});
