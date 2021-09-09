import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const entries = [
    {
        desc: 'Apple and milk',
        calories: '220',
        protein: 'P',
        carbs: 'C',
        fats: 'F',
    },
    {
        desc: 'Apple and orange',
        calories: '220',
        protein: 'P',
        carbs: 'C',
        fats: 'F',
    },
    {
        desc: 'CHEEEEESEwizzzz',
        calories: '220',
        protein: 'P',
        carbs: 'C',
        fats: 'F',
    },
];

export const EntryCard = () => (
    <Card>
        <Card.Title>Today's Entries</Card.Title>
        <Card.Divider />
        {entries.map((e, i) => {
            return (
                <View key={i}>
                    <Text>{e.desc}</Text>
                    <Card.Divider />
                </View>
            );
        })}
    </Card>
);
