import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import StepName from './Step/StepName'
import StepBirthDate from './Step/StepBirthDate';
import 'react-native-gesture-handler';
import Colors from '../../constants/color';
import StepPhoneNumber from './Step/StepPhoneNumber';


const Stack = createStackNavigator();

export default function Auth() {
    return (
        <Stack.Navigator
            screenOptions={{
                keyboardHandlingEnabled: false
            }}
        >
            <Stack.Screen
                name="Name"
                component={StepName}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="BirthDate"
                component={StepBirthDate}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PhoneNumber"
                component={StepPhoneNumber}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
