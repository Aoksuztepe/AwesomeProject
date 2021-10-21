import * as React from 'react';
import { View, Image, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './style';

const LoginScreen = ({ navigation }) => {

    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    const checkUser = () => {
        if (email=='aycarasklkn@gmail.com' && password=='123456'){
            navigation.navigate('First');
            
        }else{
            alert('Invalid User');
        }

    };
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Image
                    style={styles.stretch}
                    source={require('./img/fotologin.png')}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    value={email}
                    placeholderTextColor="#fff"
                    onChangeText={onChangeEmail} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    value={password}
                    secureTextEntry

                    placeholderTextColor="#fff"
                    onChangeText={onChangePassword} />
            </View>
            <View>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('Forgot')}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.firstpageBtn} onPress={() => checkUser()}>

                    <Text style={styles.textLoginBtn}>LOGIN</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default LoginScreen;