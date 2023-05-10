import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../../components/UI/CustomButton';
import Colors from '../../../constants/color';
import { Dimensions } from 'react-native';
import InputPhoneNumber from '../../../components/UI/InputPhone';
import { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { updatePhoneNumber } from '../../../actions/userInfoActions';

const StepPhoneNumber = ({navigation}) => {

    const dispatch = useDispatch()
    const store = useStore()

    const [phone, setPhone] = useState('')
    const [code, setCode] = useState(['+33'])

    const handlePress = () => {
        dispatch(updatePhoneNumber(code+phone))
        console.log(store.getState())
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Crée ton compte avec ton numéro de téléphone</Text>
                <View style={{paddingHorizontal: 10, width: '100%'}}>
                    <InputPhoneNumber focus setCode={setCode} setPhone={setPhone} phone={phone}/>
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={styles.buttonContainer}
            >   
                <View style={{marginBottom: 20, paddingHorizontal: 10}}>
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
        height: windowHeight/1.75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex:1,
        justifyContent:'flex-end',
        marginBottom: 30
    },
    labelInput:{
        color: 'white',
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default StepPhoneNumber;
