import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../../components/UI/CustomButton';
import InputText from '../../../components/UI/InputText';
import Colors from '../../../constants/color';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBirthDate } from '../../../actions/userInfoActions';

const StepBirthDate = ({navigation}) => {

    const dispatch = useDispatch()

    const [date, setDate] = useState('');

    const handlePress = () => {
        dispatch(updateBirthDate(date))
        navigation.navigate('PhoneNumber')
    };

    const formatDate = (input) => {
        let formattedDate = input.replace(/\D/g,'').substring(0, 8); // supprimer tout sauf les chiffres et limiter à 8 caractères
        if (formattedDate.length >= 3 && formattedDate.length <= 4) { // ajouter un espace après les deux premiers caractères si la chaîne contient entre 3 et 4 caractères
          formattedDate = formattedDate.substring(0, 2) + " " + formattedDate.substring(2);
        } else if (formattedDate.length >= 5 && formattedDate.length <= 8) { // ajouter un espace après les deux premiers caractères et après les deux suivants si la chaîne contient entre 5 et 8 caractères
          formattedDate = formattedDate.substring(0, 2) + " " + formattedDate.substring(2, 4) + " " + formattedDate.substring(4);
        }
        return formattedDate;
      };
      


    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Bonjour Hugo, quelle est ta date d'anniversaire ?</Text>
                <InputText
                    value={formatDate(date)}
                    setValue={setDate}
                    placeholder={'JJ MM AAAA'}
                    focus={true}
                    keyboardType={'numeric'}
                    maxLength={10}
                />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={styles.buttonContainer}
            >
                <View style={{ marginBottom: 20, paddingHorizontal: 10 }}>
                    <CustomButton
                        textColor={Colors.primary}
                        backgroundColor={Colors.secondary}
                        color={Colors.primary}
                        onPress={handlePress}
                    >
                        Continuer
                    </CustomButton>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    inputContainer: {
        height: windowHeight / 1.75,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50
    },
    labelInput: {
        color: 'white',
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default StepBirthDate;
