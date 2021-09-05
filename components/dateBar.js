import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet, Text, View } from 'react-native';
// import React in our code
import { useState, useEffect } from 'react';

const DateBar = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        let month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';

        let date = new Date().getDate(); //Current Date
        let monthNum = new Date().getMonth(); //Current Month
        let year = new Date().getFullYear(); //Current Year

        setCurrentDate(month[monthNum] + ' ' + date + ', ' + year);
    }, []);

    let leftArrow = '<    ';
    let rightArrow = '    >';

    return (
        <View style={styles.dateThing}>
            <Text>
                {leftArrow} {currentDate} {rightArrow}
            </Text>
        </View>
    );
};

export default DateBar;

const styles = StyleSheet.create({
    dateThing: {
        alignItems: 'center',
    },
});
