import React, { useRef, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../../constants/color';

const InputText = ({ value, setValue, placeholder, focus, keyboardType, maxLength }) => {

    const inputRef = useRef(null);

    useEffect(() => {
        if(focus){
            inputRef.current.focus(); // focus sur le TextInput au montage du composant
        }
    }, []);

    return (
        <TextInput
            ref={inputRef}
            keyboardType={keyboardType}
            style={[styles.input]}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            placeholderStyle={styles.placeholder}
            placeholderTextColor={Colors.secondary}
            selectionColor={Colors.light}
            maxLength={maxLength}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 54,
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.secondary,
        paddingHorizontal: 20,
        color: Colors.light,
        fontSize: 18,
        borderRadius: 24
    },
    placeholder:{
        color: Colors.light,
        fontSize: 18,
    }
});

export default InputText;
