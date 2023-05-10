import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import Colors from './constants/color';
import Auth from './screens/Auth/Auth'
import { userInfoReducer } from './store/userInfoReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  userInfo : userInfoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
            <Auth/>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  }
});
