import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, Text, View } from 'react-native';
import DateBar from './dateBar';
import { EntryCard } from './entryCard';
import EntryDisplay from './entryDisplay';
import FooterBar from './footerBar';
import { StatsCard } from './statsCard';
import StatsDisplay from './statsDisplay';

const Home = () => {
    return (
        <View style={styles.container}>
            <DateBar />
            <StatsCard />
            <EntryCard />
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
