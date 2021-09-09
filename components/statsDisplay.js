import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, Text, View } from 'react-native';

const StatsDisplay = () => {
    let calories = 1400;
    let maxCalories = 1800;
    let protein = 100;
    let carbs = 220;
    let fats = 30;

    return (
        <View style={styles.centered}>
            <Text>StatsDisplay</Text>
            <Text>
                Calories: {calories}/{maxCalories}
            </Text>
            <Text>
                Macros P:{protein}g C:{carbs}g F:{fats}g
            </Text>
        </View>
    );
};

export default StatsDisplay;

const styles = StyleSheet.create({
    centered: {
        alignItems: 'center',
    },
});
