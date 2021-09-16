import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {View} from 'react-native';

function sendValues(enteredName) {
    alert(enteredName);
}

const Test2 = () => {
    const [text, setText] = React.useState('');

    return (
        <View>
            <Input value={text} onChangeText={text => setText(text)} />

            <Button title="Submit" onPress={() => sendValues(text)} />
        </View>
    );
    
};

export default Test2;
