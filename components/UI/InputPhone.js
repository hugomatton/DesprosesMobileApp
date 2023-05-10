import React, { useState, useRef, useEffect } from 'react'
import { View, TextInput, StyleSheet, } from 'react-native'
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import Colors from '../../constants/color'

export default function InputPhoneNumber({ setCode, phone, setPhone, focus}) {

    const inputRef = useRef(null);

    useEffect(() => {
        if(focus){
            inputRef.current.focus(); // focus sur le TextInput au montage du composant
        }
    }, []);

    const [countryCode, setCountryCode] = useState('FR')

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCode(country.callingCode)
    }


    return (
        <View style={styles.container}>
            <View style={styles.countryCodeContainer}>
                < CountryPicker
                    {...{
                        countryCode,
                        onSelect,
                    }
                    }
                    withEmoji
                    withFlag
                    withFilter
                    theme={DARK_THEME}
                    withCallingCodeButton
                />

            </View>
            <TextInput
                style={styles.phoneInput}
                value={phone}
                onChangeText={setPhone}
                placeholder="Ton numéro"
                placeholderTextColor={Colors.secondary}
                keyboardType="phone-pad"
                ref={inputRef}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 24,
        paddingHorizontal: 10,
    },
    countryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        borderRightWidth: 1,
        borderRightColor: Colors.secondary,
    },
    countryCodeInput: {
        fontSize: 18,
        marginLeft: 10,
        height: 54,
        color: Colors.light
    },
    phoneInput: {
        flex: 1,
        fontSize: 18,
        marginLeft: 10,
        height: 54,
        color: Colors.light
    },
});


