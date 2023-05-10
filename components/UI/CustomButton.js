import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/color';

const CustomButton = ({ onPress, children, backgroundColor, color }) => {
    return (
        <Pressable
            style={({pressed})=>
                pressed ?
                [styles.button, styles.pressed, {backgroundColor: backgroundColor}] :
                [styles.button, {backgroundColor: backgroundColor}]
            }
            onPress={onPress}
        >
            <Text style={[styles.title, [{color: color}]]}>{children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: '20%',
        padding: 10,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
});

export default CustomButton;
