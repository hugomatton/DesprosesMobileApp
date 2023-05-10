import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../../components/UI/CustomButton';
import InputText from '../../../components/UI/InputText';
import Colors from '../../../constants/color';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {updateName} from '../../../actions/userInfoActions'


const StepName = ({navigation}) => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handlePress = () => {
        dispatch(updateName(name))
        navigation.navigate("BirthDate")
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.labelInput}>Comment t'appelles tu ?</Text>
                <View style={{paddingHorizontal: 10, width: '100%'}}>
                    <InputText 
                        value={name}
                        setValue={setName}
                        placeholder={'Pierre Desproges'} 
                        focus={true} 
                        keyboardType={'default'}
                    />
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
        fontSize: 20
    }
});

export default StepName;
