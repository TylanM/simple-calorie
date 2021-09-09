import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import StatsDisplay from './statsDisplay';


export const StatsCard = () => (
    <Card>
        <Card.Title>Today's Statistics</Card.Title>
        <Card.Divider />
        <StatsDisplay />
    </Card>
);