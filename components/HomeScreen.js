import * as React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';


const HomeScreen = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <View>
                <Image
                    style={styles.stretch}
                    source={require('./img/log.png')}
                />
            </View>
            <Text style={styles.logo}>
                WELCOME TO MY REACT APP
            </Text>
            <View >
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>

                    <Text style={styles.loginText}>LOGIN</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>

                    <Text style={styles.loginText}>SIGN UP</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;

